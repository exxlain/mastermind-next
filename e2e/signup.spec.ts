import { test, expect } from '@playwright/test';
import prisma from '@/lib/prisma';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('signUp page', () => {
  const account = { name: 'Lana', email: '11user@nextmail.com', password: '1qwerty!' };
  const accountWrongFields = { name: '', email: '', password: '' };

  test.beforeEach('Open start URL',async ({ page }) => {
    await page.goto('./signup')
  });

  test('signUp success attempt', async ({  page }) => {
    page.on('framenavigated', frame => {
      console.log('Navigated to:', frame.url());
    });
    await test.step('signUp', async () => {
      await page.getByLabel('name').fill(account.name);
      await page.getByLabel('email').fill(account.email);
      await page.getByLabel('password').fill(account.password);
      await page.getByRole('button', { name: 'Sign up' }).click();
      await expect(page).toHaveURL('./game')
    });
  });

  test('signUp failed attempt', async ({  page }) => {
    page.on('framenavigated', frame => {
      console.log('Navigated to:', frame.url());
    });
    await test.step('signUp', async () => {
      await page.getByLabel('name').fill(accountWrongFields.name);
      await page.getByLabel('email').fill(accountWrongFields.email);
      await page.getByLabel('password').fill(accountWrongFields.password);
      await page.getByRole('button', { name: 'Sign up' }).click();
      await expect(page).toHaveURL('./signup')
      await expect(page.getByText('Name must be at least 2 characters long.')).toBeVisible();
      await expect(page.getByText('Please enter a valid email.')).toBeVisible();
      await expect(page.getByText('Be at least 8 characters long')).toBeVisible();
      await expect(page.getByText('Contain at least one letter.')).toBeVisible();
      await expect(page.getByText('Contain at least one special character.')).toBeVisible();
    });
  });

  test.afterEach(async () => {
    await prisma.users.deleteMany({
      where: { email: account.email },
    });
  });

});
