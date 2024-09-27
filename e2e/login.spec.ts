import { test, expect } from '@playwright/test';


test('should navigate to login page', async ({ page }) => {
  await page.goto('./')
  await page.click('text=Sign in')
  await expect(page).toHaveURL('./login')
})
