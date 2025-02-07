import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('game page', () => {
  test.beforeEach('Open game URL',async ({ page, browserName }) => {
    if(browserName==='webkit'){
      await page.goto('./login');
      const account = { email: 'user1@nextmail.com', password: '1123456' };
      await page.getByLabel('Email').fill(account.email);
      await page.getByLabel('Password').fill(account.password);
      await page.getByRole('button', { name: 'Sign in' }).click();
      await page.waitForURL('./game');
    } else {
      await page.goto('./game')
    }
  });

  test('has all elements', async ({ page }) => {
    const logoutButton = page.getByRole('button', { name: 'logout' });
    await expect(logoutButton).toBeVisible();
    await expect(logoutButton).toBeEnabled();
    const startButton = page.getByLabel('Start');
    await expect(startButton).toBeVisible();
    await expect(startButton).toBeEnabled();
  });

  test('start button should change name', async ({ page }) => {
    const button = await page.getByLabel('Start');
    await expect(button).toHaveText('start');
    await button.click();
    await expect(button).toHaveText('restart');
  })

  test('should navigate to scores page', async ({ page, browserName }) => {
    if(browserName!=='webkit'){
      await page.click('text=Scores')
      await expect(page).toHaveURL('./score')
    }
  })


  test('should navigate to logout page', async ({ page }) => {
    await page.getByLabel('Logout').click();
    await expect(page).toHaveURL('./login')
  })

  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.waitForLoadState('networkidle')
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
