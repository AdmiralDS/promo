import { AVAILABLE_COLORS } from '$shared/ui';

export const ComponentAppearanceArray = ['s', 'm', 'l', 'xl'] as const;
/**
 * Тип внешнего вида компонента в песочнице. Определяет размер демонстрируемого компонента.
 *
 * @typedef {'s' | 'm' | 'l' | 'xl'} Appearance
 *
 * Значения:
 * - 's' - Маленький размер компонента
 * - 'm' - Средний размер компонента
 * - 'l' - Большой размер компонента (значение по умолчанию)
 * - 'xl' - Очень большой размер компонента
 */
export type Appearance = (typeof ComponentAppearanceArray)[number];

export type ThemeColor = keyof typeof AVAILABLE_COLORS;

function getKeys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[];
}

export const ColorArray: Array<ThemeColor> = getKeys(AVAILABLE_COLORS);
