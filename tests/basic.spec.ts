import { test, expect } from '@playwright/test';

test.describe('Basic Site Functionality', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');

    // Check that the page loads
    await expect(page).toHaveTitle(/Grease Nomads/);

    // Check for key elements
    await expect(page.locator('h1')).toContainText('Mobile Mechanics');
    await expect(page.locator('text=Get Your Free Quote Today')).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');

    // Test navigation links
    await page.click('text=Services');
    await expect(page).toHaveURL('/services');

    await page.click('text=How It Works');
    await expect(page).toHaveURL('/how-it-works');

    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact');
  });

  test('contact form works', async ({ page }) => {
    await page.goto('/contact');

    // Fill out the contact form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="phone"]', '3125550123');
    await page.fill(
      'textarea[name="message"]',
      'This is a test message for the contact form.'
    );

    // Submit the form
    await page.click('button[type="submit"]');

    // Check for success message
    await expect(page.locator('text=Message Sent!')).toBeVisible();
  });

  test('admin login works', async ({ page }) => {
    await page.goto('/admin/login');

    // Fill login form
    await page.fill('input[name="email"]', 'admin@greasenomads.com');
    await page.fill('input[name="password"]', 'admin123');

    // Submit login
    await page.click('button[type="submit"]');

    // Should redirect to admin dashboard
    await expect(page).toHaveURL('/admin');
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

