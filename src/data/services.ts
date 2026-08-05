export interface ServiceArea {
	number: string;
	title: string;
	description: string;
	accent: 'sage' | 'peach' | 'butter' | 'rose' | 'mint';
}

export const serviceAreas = [
	{
		number: '01',
		title: 'Educazione alimentare',
		description: 'Per ritrovare ascolto, consapevolezza e un rapporto più sereno con il cibo e con il corpo.',
		accent: 'sage',
	},
	{
		number: '02',
		title: 'Fasi della vita',
		description: 'Alimentazione in crescita, gravidanza, allattamento e menopausa, nel rispetto delle esigenze individuali.',
		accent: 'peach',
	},
	{
		number: '03',
		title: 'Nutrizione e movimento',
		description: 'Indicazioni alimentari per l’attività fisica e lo sport, integrate nella quotidianità.',
		accent: 'butter',
	},
	{
		number: '04',
		title: 'Condizioni patologiche',
		description: 'Percorsi dietistici in presenza di patologie diagnosticate, in collaborazione con il medico curante.',
		accent: 'rose',
	},
	{
		number: '05',
		title: 'Esigenze speciali',
		description: 'Alimentazione vegetariana o vegana, celiachia, allergie, intolleranze e altre necessità specifiche.',
		accent: 'mint',
	},
] as const satisfies readonly ServiceArea[];

export const journeySteps = [
	{
		number: '1',
		title: 'Ci conosciamo',
		description: 'La prima visita parte dalla tua storia, dalle abitudini e dalle necessità che porti con te.',
	},
	{
		number: '2',
		title: 'Definiamo gli obiettivi',
		description: 'Individuiamo insieme obiettivi realistici e gli eventuali ostacoli da considerare.',
	},
	{
		number: '3',
		title: 'Costruiamo il piano',
		description: 'Ricevi via email un piano nutrizionale personalizzato, normalmente entro cinque giorni lavorativi.',
	},
	{
		number: '4',
		title: 'Proseguiamo insieme',
		description: 'Le visite di controllo e il supporto via email aiutano ad adattare il percorso nel tempo.',
	},
] as const;
