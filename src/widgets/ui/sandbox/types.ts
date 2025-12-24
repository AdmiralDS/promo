import { AVAILABLE_COLORS } from '$shared/ui';

export const APPEARANCE_OPTIONS = ['s', 'm', 'xl'] as const;

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

export const SANDBOX_COLOR_OPTIONS: ThemeColor[] = ['blue', 'azure', 'purple', 'green', 'pink'].filter(
	(color): color is ThemeColor => color in AVAILABLE_COLORS
);

export function clampToRange(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max);
}
