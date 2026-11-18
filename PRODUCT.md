# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- People exploring individual nutrition consultations, online or in an outpatient setting. They need to understand whether the service suits them, what happens during and after the first visit, and how to book.
- Schools, employers and organizers looking for food education. They need to distinguish school workshops, workplace training and information evenings, and know how to contact Noemi.

Individual consultations and food education have equal priority as service areas. Booking a first visit is the primary action on the homepage.

## Product Purpose

Explain what dietitian Noemi Grigoletto offers and help visitors take the next step. Visitors seeking a consultation can check who the program is for, understand how it works and book a first visit. Visitors organizing food education can identify the relevant offering and make contact.

## Positioning

The individual program starts with listening to the person's needs and habits. It combines a personalized nutrition plan with practical materials, follow-up visits and email support between visits. Noemi's stated aim is to build sustainable habits and a more aware relationship with food.

## Operating Context

- The booking action opens the existing Jotform. Email and phone are available for direct contact.
- The consultation pages explain eligibility, the one-hour first visit, optional preparation, delivery of the plan and related materials within five working days, and 30-minute follow-ups scheduled according to individual needs.
- The food education offer comprises school workshops, workplace training and information evenings.

## Capabilities and Constraints

- Public content and navigation are in Italian.
- The top-level pages are Home, Chi sono, Di cosa mi occupo, Consulenze and Contattami. The personalized nutrition program uses two subpages under Consulenze, «A chi è rivolto» and «Come si svolge».
- Keep the site static, semantic, accessible and mostly free of client-side JavaScript. Keep contact details and external destinations in `src/data/site.ts`.
- Credentials, prices, locations, outcomes and other public claims require a source or direct confirmation.

## Brand Commitments

Use Noemi Grigoletto's name and professional role, Dietista. Keep public language warm, clear and respectful. The supplied personal mission, portrait and original mark are the basis of Noemi's public identity on the site.

## Evidence on Hand

- Degree, internship placements and SANIS sports nutrition master's information supplied by Noemi and recorded in `src/pages/index.astro`.
- Eight reviews supplied for the homepage in `src/data/reviews.ts`.
- Noemi's portrait and original mark in `public/images/`.
- Visit details supplied for the current site in `src/pages/consulenze/come-si-svolge.astro`.

## Product Principles

- Keep both service areas easy to find and give each a clear next step.
- Make first-visit booking easy to find, and explain preparation in practical terms.
- Describe educational activities and clinical services in language that visitors can understand.
- Preserve the accuracy and scope of Noemi's professional claims.
