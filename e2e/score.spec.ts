import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('scores page', () => {
  test.beforeEach('Open scores URL',async ({ page, browserName }) => {
    if(browserName!=='webkit'){
      const startTime = Date.now();

      await page.goto('./score', { waitUntil: 'load' });

      const endTime = Date.now();
      const loadTime = endTime - startTime;
      console.log(`Page load time (manual measurement): ${loadTime}ms`);

      await expect(page).toHaveURL('./score');


      const supportsPerformanceAPI = await page.evaluate(() => {
        return typeof performance.getEntriesByType === 'function';
      });
      if (!supportsPerformanceAPI) {
        console.warn('Performance API not supported, skipping performance metrics check.');
        return;
      }

      // Дождаться стабильности страницы
      await page.waitForTimeout(500);

      const performanceMetrics = await page.evaluate(() => {
        const [navigation] = performance.getEntriesByType('navigation');
        return {
          loadTime: navigation.loadEventEnd,
          domContentLoaded: navigation.domContentLoadedEventEnd,
        };
      });
      console.log('Performance Metrics:', performanceMetrics);

      // Проверить, что загрузка страницы укладывается в лимит
      expect(performanceMetrics.domContentLoaded).toBeLessThan(1000);
      expect(performanceMetrics.loadTime).toBeLessThan(2000);


    }
  });

  test('has all elements', async ({ page, browserName }) => {
    if(browserName!=='webkit') {
      const backToGameButton = page.getByRole('link', {name: 'back to game'});
      await expect(backToGameButton).toBeVisible();
      await expect(backToGameButton).toBeEnabled();
    }
  });

  test('should navigate to game page', async ({ page, browserName }) => {
    if(browserName!=='webkit'){
      await page.click('text=back to game')
      await expect(page).toHaveURL('./game')
    }
  })

  test('should not have any automatically detectable accessibility issues', async ({ page, browserName }) => {
    if(browserName!=='webkit') {
      await page.waitForLoadState('networkidle')
      const accessibilityScanResults = await new AxeBuilder({page}).analyze();
      console.log(accessibilityScanResults.violations)
      expect(accessibilityScanResults.violations).toEqual([]);
    }
  });
});
