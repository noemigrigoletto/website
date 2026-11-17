export interface ReviewPlaceholder {
	quote: string;
	name: string;
}

/**
 * Fictional copy used only to evaluate the testimonial layout.
 * Replace with genuine, explicitly approved client feedback before publishing.
 */
export const reviewPlaceholders = [
	{
		quote: 'Mi sono sentita ascoltata fin dal primo incontro. Il percorso mi ha aiutata a guardare le mie abitudini con più serenità e senza giudizio.',
		name: 'Giulia R. · nome di fantasia',
	},
	{
		quote: 'Ho apprezzato la chiarezza delle spiegazioni e la possibilità di costruire indicazioni adatte alla mia vita quotidiana, un passo alla volta.',
		name: 'Martina L. · nome di fantasia',
	},
	{
		quote: 'Un approccio accogliente e concreto, che non mette al centro le rinunce ma la consapevolezza e il benessere nel tempo.',
		name: 'Elena P. · nome di fantasia',
	},
] as const satisfies readonly ReviewPlaceholder[];
