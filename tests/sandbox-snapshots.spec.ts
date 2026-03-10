import { expect, test, type Locator, type Page } from '@playwright/test';

type LayoutMode = 'desktop' | 'compact' | 'mobile';
type ThemeKey = 'light' | 'dark';
type ComponentKey = 'table' | 'modal' | 'dropdown' | 'accordion';
type SizeKey = 's' | 'm' | 'l';
type ColorKey = 'blue' | 'cyan' | 'purple' | 'teal' | 'magenta';
type FieldCountLabel = 'Одно' | 'Два' | 'Три';
type DropdownModeKey = 'select' | 'multiselect';
type ArrowPositionLabel = 'Слева' | 'Справа';
type LineCountLabel = 'Одна' | 'Две' | 'Три' | 'Четыре';

type ScenarioSettings =
  | {
      id: string;
      kind: 'table';
      groupActions: boolean;
      rowDrag: boolean;
      zebra: boolean;
    }
  | {
      id: string;
      kind: 'modal';
      fieldCount: FieldCountLabel;
    }
  | {
      id: string;
      kind: 'dropdown';
      mode: DropdownModeKey;
    }
  | {
      id: string;
      kind: 'accordion';
      arrow: ArrowPositionLabel;
      lineCount: LineCountLabel;
    };

type Scenario = {
  size: SizeKey;
  color: ColorKey;
  settings: ScenarioSettings;
};

type ResolutionConfig = {
  label: string;
  width: number;
  mode: LayoutMode;
  components: Array<{ key: ComponentKey; tabLabel: string }>;
};

const VIEWPORT_HEIGHT = 2200;

const resolutions: ResolutionConfig[] = [
  {
    label: '1240',
    width: 1240,
    mode: 'desktop',
    components: [
      { key: 'table', tabLabel: 'Таблица' },
      { key: 'modal', tabLabel: 'Модальное окно' },
      { key: 'dropdown', tabLabel: 'Дропдаун' },
    ],
  },
  {
    label: '1239',
    width: 1239,
    mode: 'compact',
    components: [
      { key: 'table', tabLabel: 'Таблица' },
      { key: 'modal', tabLabel: 'Модальное окно' },
      { key: 'dropdown', tabLabel: 'Дропдаун' },
    ],
  },
  {
    label: '1024',
    width: 1024,
    mode: 'compact',
    components: [
      { key: 'table', tabLabel: 'Таблица' },
      { key: 'modal', tabLabel: 'Модальное окно' },
      { key: 'dropdown', tabLabel: 'Дропдаун' },
    ],
  },
  {
    label: '1023',
    width: 1023,
    mode: 'compact',
    components: [
      { key: 'table', tabLabel: 'Таблица' },
      { key: 'modal', tabLabel: 'Модальное окно' },
      { key: 'dropdown', tabLabel: 'Дропдаун' },
    ],
  },
  {
    label: '700',
    width: 700,
    mode: 'compact',
    components: [
      { key: 'table', tabLabel: 'Таблица' },
      { key: 'modal', tabLabel: 'Модальное окно' },
      { key: 'dropdown', tabLabel: 'Дропдаун' },
    ],
  },
  {
    label: '699',
    width: 699,
    mode: 'mobile',
    components: [
      { key: 'accordion', tabLabel: 'Аккордион' },
      { key: 'modal', tabLabel: 'Модальное окно' },
      { key: 'dropdown', tabLabel: 'Дропдаун' },
    ],
  },
  {
    label: '375',
    width: 375,
    mode: 'mobile',
    components: [
      { key: 'accordion', tabLabel: 'Аккордион' },
      { key: 'modal', tabLabel: 'Модальное окно' },
      { key: 'dropdown', tabLabel: 'Дропдаун' },
    ],
  },
];

const colorClassByKey: Record<ColorKey, string> = {
  blue: 'Blue',
  cyan: 'Cyan',
  purple: 'Purple',
  teal: 'Teal',
  magenta: 'Magenta',
};

function getSnapshotName(
  resolutionLabel: string,
  component: ComponentKey,
  theme: ThemeKey,
  size: SizeKey,
  color: ColorKey,
  settingsId: string,
) {
  return `${component}-${resolutionLabel}-${theme}-${size}-${color}-${settingsId}.png`;
}

function getScenario(mode: LayoutMode, component: ComponentKey, theme: ThemeKey): Scenario {
  if (component === 'table') {
    return theme === 'light'
      ? {
          size: 'm',
          color: 'blue',
          settings: {
            id: 'group-off-row-on-zebra-off',
            kind: 'table',
            groupActions: false,
            rowDrag: true,
            zebra: false,
          },
        }
      : {
          size: mode === 'mobile' ? 'm' : 's',
          color: 'purple',
          settings: {
            id: 'group-on-row-off-zebra-on',
            kind: 'table',
            groupActions: true,
            rowDrag: false,
            zebra: true,
          },
        };
  }

  if (component === 'modal') {
    if (theme === 'light') {
      return {
        size: 'm',
        color: 'teal',
        settings: {
          id: 'fields-one',
          kind: 'modal',
          fieldCount: 'Одно',
        },
      };
    }

    return {
      size: mode === 'mobile' ? 'm' : 'l',
      color: 'magenta',
      settings: {
        id: mode === 'mobile' ? 'fields-two' : 'fields-three',
        kind: 'modal',
        fieldCount: mode === 'mobile' ? 'Два' : 'Три',
      },
    };
  }

  if (component === 'dropdown') {
    return theme === 'light'
      ? {
          size: mode === 'mobile' ? 'm' : 's',
          color: 'cyan',
          settings: {
            id: 'mode-select',
            kind: 'dropdown',
            mode: 'select',
          },
        }
      : {
          size: mode === 'mobile' ? 'm' : 'l',
          color: 'purple',
          settings: {
            id: 'mode-multiselect',
            kind: 'dropdown',
            mode: 'multiselect',
          },
        };
  }

  return theme === 'light'
    ? {
        size: 'm',
        color: 'blue',
        settings: {
          id: 'arrow-left-lines-two',
          kind: 'accordion',
          arrow: 'Слева',
          lineCount: 'Две',
        },
      }
    : {
        size: 'm',
        color: 'blue',
        settings: {
          id: 'arrow-right-lines-four',
          kind: 'accordion',
          arrow: 'Справа',
          lineCount: 'Четыре',
        },
      };
}

async function disableAnimations(page: Page) {
  await page.addStyleTag({
    content: `
      *,
      *::before,
      *::after {
        transition-delay: 0s !important;
        transition-duration: 0s !important;
        animation-delay: 0s !important;
        animation-duration: 0s !important;
        animation-iteration-count: 1 !important;
      }
    `,
  });
}

async function seedMathRandom(page: Page) {
  await page.addInitScript(() => {
    let seed = 12345;

    Math.random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
  });
}

async function openMenuDropdown(control: Locator, index: number) {
  const menu = control.locator('.menu-button').nth(index);
  const button = menu.locator('button').first();
  if ((await button.getAttribute('aria-expanded')) !== 'true') {
    await button.click();
  }
  const dropdown = menu.locator('.dropdown-wrapper');
  await expect(dropdown).toBeVisible();
  return { menu, button, dropdown };
}

async function closeMenu(button: Locator) {
  if ((await button.getAttribute('aria-expanded')) === 'true') {
    await button.click();
  }
}

async function setTheme(control: Locator, theme: ThemeKey) {
  const themeInput = control.locator('input.sr-only[type="checkbox"]').first();
  const shouldBeDark = theme === 'dark';
  const isDark = await themeInput.isChecked();
  if (isDark === shouldBeDark) return;

  const themeToggleLabel = control.locator('.theme-toggle .toggle-label, .theme-toggle-inline .toggle-label').first();
  await themeToggleLabel.click({ force: true });
}

async function waitForThemeApplied(sandboxContainer: Locator, control: Locator, theme: ThemeKey) {
  const shouldBeDark = theme === 'dark';
  const themeInput = control.locator('input.sr-only[type="checkbox"]').first();
  const sandbox = sandboxContainer.locator('.sandbox').first();

  await expect(themeInput).toBeChecked({ checked: shouldBeDark });

  if (shouldBeDark) {
    await expect(control).toHaveClass(/control-container--dark/);
    await expect(sandbox).toHaveClass(/Dark_Sandbox_Gradient/);
  } else {
    await expect(control).not.toHaveClass(/control-container--dark/);
    await expect(sandbox).toHaveClass(/Sandbox_Gradient/);
  }
}

async function waitForUiStabilized(page: Page) {
  await page.waitForTimeout(360);
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      }),
  );
}

async function setSize(control: Locator, mode: LayoutMode, size: SizeKey) {
  if (mode === 'mobile') return;

  const sizeLabel = size.toUpperCase();

  if (mode === 'desktop') {
    const sizeField = control.locator('.sandbox-field-wrapper').filter({ hasText: 'Размер' });
    await sizeField.getByRole('tab', { name: sizeLabel, exact: true }).click();
    return;
  }

  const { button, dropdown } = await openMenuDropdown(control, 0);
  await dropdown.getByRole('tab', { name: sizeLabel, exact: true }).click();
  await closeMenu(button);
}

async function setColor(control: Locator, mode: LayoutMode, component: ComponentKey, color: ColorKey) {
  if (mode === 'mobile' && component === 'accordion') {
    return;
  }

  const colorClass = `.btn-Circle_${colorClassByKey[color]}`;

  if (mode === 'desktop') {
    const colorField = control.locator('.sandbox-field-wrapper').filter({ hasText: 'Цвет' });
    await colorField.locator(colorClass).first().click();
    return;
  }

  const colorMenuIndex = mode === 'compact' ? 2 : 1;
  const { button, dropdown } = await openMenuDropdown(control, colorMenuIndex);
  await dropdown.locator(colorClass).first().click();
  await closeMenu(button);
}

async function setToggleByLabel(container: Locator, label: string, nextValue: boolean) {
  const checkbox = container.getByRole('checkbox', { name: label, exact: true });
  if ((await checkbox.isChecked()) !== nextValue) {
    await checkbox.click({ force: true });
  }
}

async function applyTableSettings(
  control: Locator,
  mode: LayoutMode,
  settings: Extract<ScenarioSettings, { kind: 'table' }>,
) {
  if (mode === 'desktop') {
    const settingsContainer = control.locator('.table-settings').first();
    await setToggleByLabel(settingsContainer, 'Групповые действия', settings.groupActions);
    await setToggleByLabel(settingsContainer, 'Перетаскивание строк', settings.rowDrag);
    await setToggleByLabel(settingsContainer, 'Зебра', settings.zebra);
    return;
  }

  const { button, dropdown } = await openMenuDropdown(control, 1);
  await setToggleByLabel(dropdown, 'Групповые действия', settings.groupActions);
  await setToggleByLabel(dropdown, 'Перетаскивание строк', settings.rowDrag);
  await setToggleByLabel(dropdown, 'Зебра', settings.zebra);
  await closeMenu(button);
}

async function applyModalSettings(
  control: Locator,
  mode: LayoutMode,
  settings: Extract<ScenarioSettings, { kind: 'modal' }>,
) {
  if (mode === 'desktop') {
    const settingsField = control.locator('.sandbox-field-wrapper').filter({ hasText: 'Полей' });
    await settingsField.getByRole('tab', { name: settings.fieldCount, exact: true }).click();
    return;
  }

  const settingsMenuIndex = mode === 'compact' ? 1 : 0;
  const { button, dropdown } = await openMenuDropdown(control, settingsMenuIndex);
  await dropdown.getByRole('tab', { name: settings.fieldCount, exact: true }).click();
  await closeMenu(button);
}

async function applyDropdownSettings(
  control: Locator,
  mode: LayoutMode,
  settings: Extract<ScenarioSettings, { kind: 'dropdown' }>,
) {
  const radioLabel = settings.mode === 'select' ? 'Селект' : 'Мультиселект';

  if (mode === 'desktop') {
    const settingsContainer = control.locator('.dropdown-settings').first();
    await settingsContainer.locator('label.radio-label').filter({ hasText: radioLabel }).first().click();
    return;
  }

  const settingsMenuIndex = mode === 'compact' ? 1 : 0;
  const { button, dropdown } = await openMenuDropdown(control, settingsMenuIndex);
  await dropdown.locator('label.radio-label').filter({ hasText: radioLabel }).first().click();
  await closeMenu(button);
}

async function applyAccordionSettings(control: Locator, settings: Extract<ScenarioSettings, { kind: 'accordion' }>) {
  const arrowMenu = await openMenuDropdown(control, 0);
  await arrowMenu.dropdown.getByRole('tab', { name: settings.arrow, exact: true }).click();
  await closeMenu(arrowMenu.button);

  const lineCountMenu = await openMenuDropdown(control, 1);
  await lineCountMenu.dropdown.getByRole('tab', { name: settings.lineCount, exact: true }).click();
  await closeMenu(lineCountMenu.button);
}

async function applyScenarioSettings(control: Locator, mode: LayoutMode, scenario: Scenario) {
  if (scenario.settings.kind === 'table') {
    await applyTableSettings(control, mode, scenario.settings);
    return;
  }

  if (scenario.settings.kind === 'modal') {
    await applyModalSettings(control, mode, scenario.settings);
    return;
  }

  if (scenario.settings.kind === 'dropdown') {
    await applyDropdownSettings(control, mode, scenario.settings);
    return;
  }

  await applyAccordionSettings(control, scenario.settings);
}

test.describe('Sandbox visual snapshots', () => {
  for (const resolution of resolutions) {
    test.describe(resolution.label, () => {
      test.use({ viewport: { width: resolution.width, height: VIEWPORT_HEIGHT } });

      for (const component of resolution.components) {
        for (const theme of ['light', 'dark'] as const) {
          test(`${component.key} ${theme}`, async ({ page }) => {
            await seedMathRandom(page);
            await page.goto('/');
            await disableAnimations(page);

            const sandboxContainer = page.locator('.sandbox-container').first();
            await sandboxContainer.scrollIntoViewIfNeeded();
            await expect(sandboxContainer).toBeVisible();

            const control = sandboxContainer.locator('.control-container').first();
            await expect(control).toBeVisible();

            const scenario = getScenario(resolution.mode, component.key, theme);

            await setTheme(control, theme);
            await waitForThemeApplied(sandboxContainer, control, theme);
            await waitForUiStabilized(page);

            await sandboxContainer
              .locator('.header .toggle-group')
              .getByRole('tab', { name: component.tabLabel, exact: true })
              .click();

            await setSize(control, resolution.mode, scenario.size);
            await setColor(control, resolution.mode, component.key, scenario.color);
            await applyScenarioSettings(control, resolution.mode, scenario);

            await page.mouse.move(1, 1);
            await page.waitForTimeout(150);

            await expect(sandboxContainer).toHaveScreenshot(
              getSnapshotName(
                resolution.label,
                component.key,
                theme,
                scenario.size,
                scenario.color,
                scenario.settings.id,
              ),
              {
                animations: 'disabled',
              },
            );
          });
        }
      }
    });
  }
});
