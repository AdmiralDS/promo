type Dimension = {
	desktop: string;
	tablet: string;
	phone: string;
};

export type LogoProps = {
	/** Высота иконки, задается для разрешений экрана desktop, tablet, phone  */
	height?: Dimension;
	/** Ширина иконки, задается для разрешений экрана desktop, tablet, phone */
	width?: Dimension;
};

export const DEFAULT_SIZE: Dimension = { desktop: '100%', tablet: '100%', phone: '100%' };
