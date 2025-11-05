import { expect, test } from '@playwright/test';

type SectionConfig = {
	name: string;
	selector: string;
};

const sections: SectionConfig[] = [
	{ name: 'header', selector: '.header-container' },
	{ name: 'about', selector: '.about-container' },
	{ name: 'care-benefits', selector: '.carebenefits-container' },
	{ name: 'products', selector: '.products-container' },
	{ name: 'beyond-ui', selector: '.beyondui-container' },
	{ name: 'team', selector: '.team-container' },
	{ name: 'footer', selector: '.footer-container' }
];

const viewports = [
	{ label: '1240', width: 1240 },
	{ label: '1239', width: 1239 },
	{ label: '1024', width: 1024 },
	{ label: '1023', width: 1023 },
	{ label: '700', width: 700 },
	{ label: '699', width: 699 },
	{ label: '375', width: 375 }
];

const VIEWPORT_HEIGHT = 2200;
const SNAPSHOT_DATE_ISO = '2025-10-29T12:00:00Z';

test.describe('UI widgets visual regression', () => {
	test.beforeEach(async ({ page }) => {
		await page.addInitScript(
			({ isoString }) => {
				const OriginalDate = Date;
				const fixedDate = new OriginalDate(isoString);
				const fixedTime = fixedDate.getTime();

				function MockDate(this: Date, ...args: unknown[]) {
					if (new.target) {
						if (args.length === 0) {
							return new OriginalDate(fixedTime);
						}
						return new OriginalDate(...(args as ConstructorParameters<typeof OriginalDate>));
					}

					if (args.length === 0) {
						return new OriginalDate(fixedTime).toString();
					}
					return new OriginalDate(
						...(args as ConstructorParameters<typeof OriginalDate>)
					).toString();
				}

				MockDate.prototype = Object.create(OriginalDate.prototype);
				Object.defineProperty(MockDate.prototype, 'constructor', {
					value: MockDate,
					writable: true,
					configurable: true
				});

				const MockDateConstructor = MockDate as unknown as DateConstructor;

				MockDateConstructor.now = () => fixedTime;
				MockDateConstructor.UTC = OriginalDate.UTC;
				MockDateConstructor.parse = OriginalDate.parse;
				Object.setPrototypeOf(MockDateConstructor, OriginalDate);

				window.Date = MockDateConstructor;
				globalThis.Date = MockDateConstructor;
			},
			{ isoString: SNAPSHOT_DATE_ISO }
		);
	});

	for (const viewport of viewports) {
		test.describe(`${viewport.label}px`, () => {
			test.use({ viewport: { width: viewport.width, height: VIEWPORT_HEIGHT } });

			for (const section of sections) {
				test(`${section.name} matches snapshot`, async ({ page }) => {
					await page.goto('/');
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
						`
					});

					const locator = page.locator(section.selector).first();
					await locator.scrollIntoViewIfNeeded();
					await expect(locator, `${section.name} block should be visible`).toBeVisible();

					await expect(locator).toHaveScreenshot(`${section.name}-${viewport.label}.png`, {
						animations: 'disabled'
					});
				});
			}
		});
	}
});
