import { test } from '@playwright/test';

test('Open Google homepage', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Pause so you can see the page (optional)
  await page.waitForTimeout(3000); 
});
