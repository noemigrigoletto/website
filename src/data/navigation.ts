export interface NavigationItem {
	label: string;
	href: string;
}

export const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'La mia missione', href: '/#philosophy-title' },
	{ label: 'Educazione alimentare', href: '/di-cosa-mi-occupo' },
	{ label: 'Percorso nutrizionale', href: '/consulenze' },
	{ label: 'Contattami', href: '/#contatti-rapidi' },
] as const satisfies readonly NavigationItem[];
