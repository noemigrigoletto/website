import type { IconName } from '../components/ui/Icon.astro';

export interface ServiceArea {
	title: string;
	description: string;
	icon: IconName;
}

export const foodEducation = {
	title: 'Educazione alimentare',
	description: 'Percorsi individuali, laboratori e formazione aziendale per approfondire il rapporto con il cibo e le abitudini alimentari.',
	icon: 'education',
} as const satisfies ServiceArea;

export const serviceAreas = [
	{
		title: 'Fasi della vita',
		description: 'Alimentazione in crescita, gravidanza, allattamento e menopausa, nel rispetto delle esigenze individuali.',
		icon: 'life',
	},
	{
		title: 'Nutrizione e movimento',
		description: 'Indicazioni alimentari per l’attività fisica e lo sport, integrate nella quotidianità.',
		icon: 'movement',
	},
	{
		title: 'Condizioni patologiche',
		description: 'Percorsi dietistici in presenza di patologie diagnosticate, in collaborazione con il medico curante.',
		icon: 'clinical',
	},
	{
		title: 'Esigenze speciali',
		description: 'Alimentazione vegetariana o vegana, celiachia, allergie, intolleranze e altre necessità specifiche.',
		icon: 'special',
	},
] as const satisfies readonly ServiceArea[];

export const journeySteps = [
	{
		title: 'Prima visita · 1 ora',
		description: 'Ripercorriamo la tua storia clinica e alimentare, comprese eventuali patologie segnalate dal medico. Rivediamo la storia del peso e rileviamo peso, altezza, indice di massa corporea e circonferenze.',
	},
	{
		title: 'Obiettivi del percorso',
		description: 'Concordiamo gli obiettivi e individuiamo gli ostacoli che potrebbero rendere più difficile raggiungerli.',
	},
	{
		title: 'Preparazione del piano',
		description: 'Preparo un piano nutrizionale personalizzato sulla base di quanto emerso durante la visita.',
	},
	{
		title: 'Invio del piano',
		description: 'Ricevi il piano via email entro cinque giorni lavorativi dalla prima visita.',
	},
	{
		title: 'Visite di controllo · 30 minuti',
		description: 'Verifichiamo come sta funzionando il piano. La frequenza degli incontri dipende dalle tue esigenze e dal percorso concordato.',
	},
	{
		title: 'Supporto tra le visite',
		description: 'Puoi scrivermi via email per affrontare le difficoltà che emergono nel seguire il piano e, se serve, chiedere assistenza telefonica.',
	},
] as const;
