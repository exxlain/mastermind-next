import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  await page.goto('./login');
  const account = { email: 'user1@nextmail.com', password: '1123456' };
  await page.getByLabel('Email').fill(account.email);
  await page.getByLabel('Password').fill(account.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('./game');
  await expect(page).toHaveURL('./game')
  await page.context().storageState({ path: authFile });
});
