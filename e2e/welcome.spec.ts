import { test, expect } from '@playwright/test';


test.describe('welcome page', () => {
  test.beforeEach('Open start URL',async ({ page }) => {
    await page.goto('./')
  });

  test('has all elements', async ({ page }) => {
    const singUpButton = page.getByRole('link', { name: 'Sign up' })
    const singInButton = page.getByRole('link', { name: 'Sign in' })
    await expect(page.locator('h1')).toContainText(/Welcome to Mastermind game/);
    await expect(singUpButton).toBeVisible();
    await expect(singInButton).toBeVisible();
    await expect(singUpButton).toBeEnabled();
    await expect(singInButton).toBeEnabled();
  });

  test('should navigate to login page', async ({ page }) => {
    await page.click('text=Sign in')
    await expect(page).toHaveURL('./login')
  })

  test('should navigate to signup page', async ({ page }) => {
    await page.click('text=Sign up')
    await expect(page).toHaveURL('./signup')
  })

});
