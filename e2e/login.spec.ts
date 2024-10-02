import { test, expect } from '@playwright/test';

test.describe('login page', () => {
  test.beforeEach('Open start URL',async ({ page }) => {
    await page.goto('./login')
  });

  test('login success attempt', async ({  page }) => {
    page.on('framenavigated', frame => {
      console.log('Navigated to:', frame.url());
    });
    await test.step('login', async () => {
      const account = { email: 'user1@nextmail.com', password: '1123456' };
      await page.getByLabel('Email').fill(account.email);
      await page.getByLabel('Password').fill(account.password);
      await page.getByRole('button', { name: 'Sign in' }).click();
      await expect(page).toHaveURL('./game')
    });
  });

  test('login with wrong email', async ({ page }) => {

    await test.step('login', async () => {
      const account = { email: 'user@nextmail.com', password: '1123456' };
      await page.getByLabel('Email').fill(account.email);
      await page.getByLabel('Password').fill(account.password);
      await page.getByRole('button', { name: 'Sign in' }).click();

      await expect(page).toHaveURL('./login')
      await expect(page.getByText('Invalid login credentials.')).toBeVisible();
    });
  });

});
