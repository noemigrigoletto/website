export interface NavigationItem {
	label: string;
	href: string;
}

export const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'Educazione alimentare', href: '/di-cosa-mi-occupo' },
	{ label: 'Percorso nutrizionale', href: '/consulenze' },
	{ label: 'Contattami', href: '/contattami' },
] as const satisfies readonly NavigationItem[];
