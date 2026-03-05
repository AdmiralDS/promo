import { expect, test } from '@playwright/test';

type SectionConfig = {
  name: string;
  selector: string;
};

const sections: SectionConfig[] = [
  { name: 'header', selector: '.header-container' },
  { name: 'about', selector: '.about-container' },
  { name: 'care benefits', selector: '.carebenefits-container' },
  { name: 'products', selector: '.products-container' },
  { name: 'beyond ui', selector: '.beyondui-container' },
  { name: 'team', selector: '.team-container' },
  { name: 'footer', selector: '.footer-container' },
];

const VIEWPORT_HEIGHT = 2200;

const viewports = [
  { label: '1240', width: 1240, height: VIEWPORT_HEIGHT },
  { label: '1239', width: 1239, height: VIEWPORT_HEIGHT },
  { label: '1024', width: 1024, height: VIEWPORT_HEIGHT },
  { label: '1023', width: 1023, height: VIEWPORT_HEIGHT },
  { label: '700', width: 700, height: VIEWPORT_HEIGHT },
  { label: '699', width: 699, height: VIEWPORT_HEIGHT },
  { label: '375', width: 375, height: VIEWPORT_HEIGHT },
];

const widthTolerance = 1; // account for sub-pixel rounding

test.describe('UI widgets responsive layout', () => {
  for (const viewport of viewports) {
    test.describe(viewport.label, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      test(`blocks fit viewport on ${viewport.label}`, async ({ page }) => {
        await page.goto('/');

        const { docScrollWidth, bodyScrollWidth, viewportWidth } = await page.evaluate(() => ({
          docScrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
          viewportWidth: window.innerWidth,
        }));

        expect(docScrollWidth).toBeLessThanOrEqual(viewportWidth + widthTolerance);
        expect(bodyScrollWidth).toBeLessThanOrEqual(viewportWidth + widthTolerance);

        for (const section of sections) {
          const locator = page.locator(section.selector).first();
          await locator.scrollIntoViewIfNeeded();
          await expect(locator, `${section.name} block should be visible`).toBeVisible();

          const boundingBox = await locator.boundingBox();
          expect(boundingBox, `${section.name} block should have a bounding box`).not.toBeNull();
          if (!boundingBox) continue;

          expect(boundingBox.width).toBeLessThanOrEqual(viewport.width + widthTolerance);
          expect(boundingBox.x).toBeGreaterThanOrEqual(-widthTolerance);
        }
      });
    });
  }
});
