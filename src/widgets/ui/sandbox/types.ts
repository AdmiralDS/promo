import { AVAILABLE_COLORS } from '$shared/ui';

export const APPEARANCE_OPTIONS = ['s', 'm', 'l'] as const;
export const FIELD_COUNT_OPTIONS = [1, 2, 3] as const;
export const DROPDOWN_MODE_OPTIONS = ['select', 'multiselect'] as const;
export const ACCORDION_ARROW_POSITION_OPTIONS = ['left', 'right'] as const;
export const ACCORDION_LINE_COUNT_OPTIONS = [1, 2, 3, 4] as const;

/**
 * Внешний вид компонента в песочнице.
 *
 * Значения:
 * - 's' — малый размер
 * - 'm' — средний (значение по умолчанию)
 * - 'xl' — большой размер
 */
export type Appearance = (typeof APPEARANCE_OPTIONS)[number];
export type DropdownMode = (typeof DROPDOWN_MODE_OPTIONS)[number];
export type AccordionArrowPosition = (typeof ACCORDION_ARROW_POSITION_OPTIONS)[number];
export type AccordionLineCount = (typeof ACCORDION_LINE_COUNT_OPTIONS)[number];

export type ThemeColor = keyof typeof AVAILABLE_COLORS;

export const SANDBOX_COLOR_OPTIONS: ThemeColor[] = ['blue', 'cyan', 'purple', 'teal', 'magenta'].filter(
  (color): color is ThemeColor => color in AVAILABLE_COLORS,
);

const CIRCLE_COLOR_MAP: Record<ThemeColor, `#${string}`> = {
  blue: '#3984ff',
  cyan: '#0e8ce1',
  purple: '#8a3ffc',
  teal: '#009692',
  magenta: '#d02670',
};

export const getCircleFill = (color: ThemeColor): `#${string}` => CIRCLE_COLOR_MAP[color] ?? CIRCLE_COLOR_MAP.blue;
