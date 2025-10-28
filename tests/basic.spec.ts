import { test, expect } from '@playwright/test';

test.describe('Basic Site Functionality', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');

    // Check that the page loads
    await expect(page).toHaveTitle(/Grease Nomads/);

    // Check for key elements
    await expect(page.locator('h1')).toContainText('GREASE NOMADS');
    await expect(page.getByRole('link', { name: 'Get Free Quote' })).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');

    // Test navigation links
    const navigate = async (label: string, expectedPath: RegExp) => {
      const mobileMenuButton = page.locator('button[aria-label*="navigation menu"]');
      if (await mobileMenuButton.isVisible()) {
        await mobileMenuButton.click();
      }

      await page.getByRole('link', { name: label, exact: true }).first().click();
      await expect(page).toHaveURL(expectedPath);
    };

    await navigate('Services', /\/services$/);
    await navigate('How It Works', /\/how-it-works$/);
    await navigate('Contact', /\/contact$/);
  });

  test('contact page embeds quote form', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.locator('h1')).toContainText('Contact Grease Nomads');
    await expect(
      page.locator('iframe[title="Grease Nomads Quote Request Form"]')
    ).toBeVisible();
    await expect(page.locator('text=Call Us')).toBeVisible();
  });

  test('admin login works', async ({ page }) => {
    await page.goto('/admin/login');

    // Fill login form
    await page.fill('input[name="email"]', 'admin@greasenomads.com');
    await page.fill('input[name="password"]', 'admin123');

    // Submit login
    await page.click('button[type="submit"]');

    // Should redirect to admin dashboard
    await expect(page).toHaveURL(/\/admin\/dashboard$/);
    await expect(page.locator('text=Admin Dashboard')).toBeVisible();
  });

  test('sitemap exists', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
  });

  test('robots.txt exists', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
  });
});
