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
