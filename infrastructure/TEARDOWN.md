# AWS infrastructure inventory and teardown

This document records the AWS changes made for `https://noemi.adetomasi.com`.

All commands intentionally use the explicit AWS CLI profile `default` and AWS
account `128780714139`. S3 is in `us-east-1`; CloudFront and IAM are global.

> **Warning:** teardown commands are destructive. Verify the AWS identity and
> every resource identifier before running them. Follow the order below because
> CloudFront resources cannot be removed while they are associated.

## Identity check

Run this before any teardown operation and confirm account `128780714139`:

```bash
aws sts get-caller-identity --profile default
```

## Resources created for this website

### CloudFront distribution

- Distribution ID: `E2OQXDU8OVQJMQ`
- Distribution ARN: `arn:aws:cloudfront::128780714139:distribution/E2OQXDU8OVQJMQ`
- CloudFront hostname: `d1i6410p8fnspr.cloudfront.net`
- Alias: `noemi.adetomasi.com`
- Origin: `website-noemi-grigoletto.s3.us-east-1.amazonaws.com`
- Certificate: the pre-existing shared `*.adetomasi.com` certificate
- Viewer-request function: `noemi-clean-urls`
- OAC: `E1QTRG4WCRWTVN`

### CloudFront Function

- Name: `noemi-clean-urls`
- ARN: `arn:aws:cloudfront::128780714139:function/noemi-clean-urls`
- Purpose: rewrite Astro clean URLs such as `/chi-sono` to
  `/chi-sono/index.html`

### CloudFront Origin Access Control

- Name: `website-noemi-grigoletto-oac`
- ID: `E1QTRG4WCRWTVN`
- Purpose: allow signed CloudFront requests to the private S3 origin

### IAM policy

- Name: `deploy-website-noemi-grigoletto`
- ARN: `arn:aws:iam::128780714139:policy/deploy-website-noemi-grigoletto`
- Attached to the pre-existing user `github-action-s3`
- Permissions are limited to:
  - listing `website-noemi-grigoletto`;
  - uploading and deleting objects in that bucket;
  - invalidating distribution `E2OQXDU8OVQJMQ`.

## Changes made to the pre-existing S3 bucket

The bucket `website-noemi-grigoletto` already existed. It was **not** created as
part of this work.

Changes made:

1. Enabled all four S3 public-access-block settings.
2. Added a bucket policy granting `s3:GetObject` only to CloudFront distribution
   `E2OQXDU8OVQJMQ` through the CloudFront service principal and an exact
   `AWS:SourceArn` condition.
3. GitHub Actions uploaded the generated `dist/` files to the bucket.

The following existing settings were inspected but not changed:

- S3 Object Ownership: `BucketOwnerEnforced`;
- default encryption: SSE-S3 (`AES256`);
- bucket versioning: not enabled;
- S3 website hosting: not enabled.

## Related non-AWS changes

These are necessary to remove the public site completely, but they are not AWS
resources created by the CLI:

- Porkbun CNAME: `noemi` -> `d1i6410p8fnspr.cloudfront.net`;
- GitHub repository variables: `AWS_BUCKET`, `AWS_KEY_ID`, and
  `CLOUDFRONT_DISTRIBUTION_ID`;
- GitHub repository secret: `AWS_SECRET_ACCESS_KEY`;
- GitHub Actions workflow: `.github/workflows/deploy.yml`.

## Safe teardown order

### 1. Stop future deployments

Disable or remove `.github/workflows/deploy.yml` before deleting AWS resources.
Also remove these values from the GitHub repository settings:

- variable `AWS_BUCKET`;
- variable `AWS_KEY_ID`;
- variable `CLOUDFRONT_DISTRIBUTION_ID`;
- secret `AWS_SECRET_ACCESS_KEY`.

If the access key was created exclusively for this repository, delete it from
the pre-existing IAM user. Obtain the exact key ID from the former GitHub
`AWS_KEY_ID` variable and use it in place of the placeholder:

```bash
aws iam delete-access-key \
  --user-name github-action-s3 \
  --access-key-id <NOEMI_GITHUB_ACCESS_KEY_ID> \
  --profile default
```

Do not delete the `github-action-s3` user: it is shared with other repositories.

### 2. Remove the Porkbun record

Delete only this DNS record:

- type: `CNAME`;
- host: `noemi`;
- answer: `d1i6410p8fnspr.cloudfront.net`.

Do not delete other `adetomasi.com` records.

### 3. Disable the CloudFront distribution

Fetch the current configuration and ETag:

```bash
aws cloudfront get-distribution-config \
  --id E2OQXDU8OVQJMQ \
  --profile default
```

Save the returned `DistributionConfig` as a JSON file, change only `Enabled` to
`false`, and update the distribution using the returned ETag:

```bash
aws cloudfront update-distribution \
  --id E2OQXDU8OVQJMQ \
  --if-match <CURRENT_DISTRIBUTION_ETAG> \
  --distribution-config file://<DISABLED_DISTRIBUTION_CONFIG.json> \
  --profile default
```

Wait for the disabled configuration to deploy:

```bash
aws cloudfront wait distribution-deployed \
  --id E2OQXDU8OVQJMQ \
  --profile default
```

### 4. Delete the CloudFront distribution

Fetch the distribution configuration again because disabling it produces a new
ETag, then delete it with that new ETag:

```bash
aws cloudfront get-distribution-config \
  --id E2OQXDU8OVQJMQ \
  --profile default

aws cloudfront delete-distribution \
  --id E2OQXDU8OVQJMQ \
  --if-match <NEW_DISTRIBUTION_ETAG> \
  --profile default
```

### 5. Delete the CloudFront Function

After the distribution has been deleted, obtain the function ETag:

```bash
aws cloudfront describe-function \
  --name noemi-clean-urls \
  --stage DEVELOPMENT \
  --profile default
```

Then delete it:

```bash
aws cloudfront delete-function \
  --name noemi-clean-urls \
  --if-match <CURRENT_FUNCTION_ETAG> \
  --profile default
```

### 6. Delete the Origin Access Control

Obtain the current OAC ETag:

```bash
aws cloudfront get-origin-access-control \
  --id E1QTRG4WCRWTVN \
  --profile default
```

Then delete it:

```bash
aws cloudfront delete-origin-access-control \
  --id E1QTRG4WCRWTVN \
  --if-match <CURRENT_OAC_ETAG> \
  --profile default
```

### 7. Remove the deployment policy from the shared IAM user

Detach the site-specific policy and then delete the policy:

```bash
aws iam detach-user-policy \
  --user-name github-action-s3 \
  --policy-arn arn:aws:iam::128780714139:policy/deploy-website-noemi-grigoletto \
  --profile default

aws iam delete-policy \
  --policy-arn arn:aws:iam::128780714139:policy/deploy-website-noemi-grigoletto \
  --profile default
```

Do not detach or delete the other policies on `github-action-s3`; they belong to
the existing `www.adetomasi.com` and `cv.adetomasi.com` deployments.

### 8. Remove the CloudFront bucket policy

The bucket had no bucket policy before this deployment. Remove the policy after
the distribution is gone:

```bash
aws s3api delete-bucket-policy \
  --bucket website-noemi-grigoletto \
  --profile default
```

### 9. Decide whether to retain or delete the pre-existing bucket

The safer default is to retain the empty, private bucket. To remove only the
deployed website files while retaining the bucket:

```bash
aws s3 rm s3://website-noemi-grigoletto/ \
  --recursive \
  --profile default
```

Delete the bucket itself only if you have confirmed that nothing else uses it:

```bash
aws s3api delete-bucket \
  --bucket website-noemi-grigoletto \
  --region us-east-1 \
  --profile default
```

The bucket must be empty before `delete-bucket` will succeed.

## Shared resources that must not be deleted

The following resources existed before this project and are used elsewhere:

- IAM user `arn:aws:iam::128780714139:user/github-action-s3`;
- ACM certificate
  `arn:aws:acm:us-east-1:128780714139:certificate/5ab37fad-0d72-4cb3-b121-a1fe0916a901`;
- CloudFront distributions `E2Y9I55OQ9JN4V` and `EFASLO8Q9RE98`;
- Origin Access Control `E2Y014I4UFVQX`;
- existing IAM policies for `www.adetomasi.com`, `cv.adetomasi.com`, and their
  existing CloudFront invalidation permissions.

The wildcard ACM certificate is shared by multiple CloudFront distributions.
Deleting it would affect other sites.

## Final verification after teardown

These read-only commands should report that the site-specific resources no
longer exist:

```bash
aws cloudfront get-distribution \
  --id E2OQXDU8OVQJMQ \
  --profile default

aws cloudfront describe-function \
  --name noemi-clean-urls \
  --profile default

aws cloudfront get-origin-access-control \
  --id E1QTRG4WCRWTVN \
  --profile default

aws iam get-policy \
  --policy-arn arn:aws:iam::128780714139:policy/deploy-website-noemi-grigoletto \
  --profile default
```

Each command should return a corresponding not-found error after successful
deletion.
