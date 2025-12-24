import { AVAILABLE_COLORS } from '$shared/ui';

export const APPEARANCE_OPTIONS = ['s', 'm', 'xl'] as const;
export const FIELD_COUNT_OPTIONS = [1, 2, 3] as const;

/**
 * Внешний вид компонента в песочнице.
 *
 * Значения:
 * - 's' — малый размер
 * - 'm' — средний (значение по умолчанию)
 * - 'xl' — большой размер
 */
export type Appearance = (typeof APPEARANCE_OPTIONS)[number];

export type ThemeColor = keyof typeof AVAILABLE_COLORS;

export const SANDBOX_COLOR_OPTIONS: ThemeColor[] = [
	'blue',
	'azure',
	'purple',
	'green',
	'pink'
].filter((color): color is ThemeColor => color in AVAILABLE_COLORS);
