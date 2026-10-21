import { test, expect } from '@playwright/test';

test('home loads without console errors', async ({ page }) => {
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto('/');
  await expect(page).toHaveTitle(/MkT Toolkit/);
  expect(errors).toEqual([]);
});

test('tool pages load', async ({ page }) => {
  const tools = ['tools/qrcode.html', 'tools/color-studio.html', 'tools/image-studio.html'];
  for (const t of tools) {
    await page.goto('/' + t);
    await expect(page.locator('body')).toBeVisible();
  }
});
