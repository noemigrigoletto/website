export interface NavigationItem {
	label: string;
	href: string;
}

export const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'Chi sono', href: '/chi-sono' },
	{ label: 'Di cosa mi occupo', href: '/di-cosa-mi-occupo' },
	{ label: 'Consulenze', href: '/consulenze' },
	{ label: 'Contattami', href: '/contattami' },
] as const satisfies readonly NavigationItem[];
