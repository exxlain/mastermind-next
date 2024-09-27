import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('h1')).toContainText(/Welcome to Mastermind game/);
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();

  // кнопка активна expect(locator).toBeEnabled()

});

