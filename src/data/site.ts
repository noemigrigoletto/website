export interface SocialLink {
	label: 'Instagram' | 'Facebook';
	href: string;
}

export interface DownloadResource {
	label: string;
	description: string;
	href: string;
}

export const site = {
	name: 'Noemi Grigoletto',
	role: 'Dietista',
	baseUrl: 'https://noemi.adetomasi.com',
	email: 'dietista@noemigrigoletto.com',
	phoneDisplay: '+39 349 241 8586',
	phoneHref: 'tel:+393492418586',
	bookingUrl: 'https://form.jotform.com/240092101421033',
	locations: [
		{ name: 'Studio privato', address: 'Via Marosticana 126, 36031 Dueville', mapUrl: 'https://maps.app.goo.gl/jbK6tU2Wt99QprQWA' },
		{ name: 'Studio Bambù', address: 'Via Cà del Luogo 6, 36050 Bolzano Vicentino', mapUrl: 'https://maps.app.goo.gl/1LAMbqMKqZKWYKnu9' },
	],
	portrait: {
		src: '/images/noemi-profilo-trasparente.webp',
		alt: 'Noemi Grigoletto, dietista',
		width: 1080,
		height: 1362,
	},
	mark: {
		src: '/images/noemi-mark.png',
		alt: '',
	},
	socialPreview: '/images/social-preview-placeholder.svg',
	socials: [
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/dietistanoemigrigoletto/',
		},
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/dietistanoemigrigoletto/',
		},
	] satisfies SocialLink[],
	resources: [
		{
			label: 'Facsimile della prescrizione medica',
			description: 'Un modello da far compilare al medico curante quando necessario.',
			href: 'https://drive.google.com/file/d/1Lc0YJPEY_YWegNXfgdwnd6y37UIwq0GT/view?usp=sharing',
		},
		{
			label: 'Diario alimentare',
			description: 'Il diario facoltativo da compilare per 3–7 giorni prima della visita.',
			href: 'https://drive.google.com/file/d/1r-6AfYjFo2yBk9dN2TZB_lTSD60gIUln/view?usp=sharing',
		},
	] satisfies DownloadResource[],
} as const;

export type Site = typeof site;
