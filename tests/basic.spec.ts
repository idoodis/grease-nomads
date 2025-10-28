import { test, expect } from '@playwright/test';

const normalizeWhitespace = (value: string) => value.replace(/\s+/g, ' ').trim();

const expectHtmlToContain = (html: string, substring: string) => {
  expect(normalizeWhitespace(html)).toContain(normalizeWhitespace(substring));
};

test.describe('Basic Site Functionality (HTTP)', () => {
  test('homepage responds with hero content', async ({ request }) => {
    const response = await request.get('/');
    expect(response.ok()).toBeTruthy();

    const body = await response.text();
    expectHtmlToContain(body, 'Grease Nomads - ASE Certified Mobile Mechanics | Chicago Auto Repair');
    expectHtmlToContain(body, 'GREASE NOMADS');
    expectHtmlToContain(body, 'Get Free Quote');
  });

  test('services, how-it-works, and contact pages are reachable', async ({ request }) => {
    const pages = [
      { path: '/services', expected: 'Professional Auto Care, Delivered To You' },
      { path: '/how-it-works', expected: 'How It Works' },
      { path: '/contact', expected: 'Contact Grease Nomads' },
    ];

    for (const { path, expected } of pages) {
      const response = await request.get(path);
      expect(response.ok()).toBeTruthy();

      const body = await response.text();
      expectHtmlToContain(body, expected);
    }
  });

  test('contact page embeds quote form and call-to-action', async ({ request }) => {
    const response = await request.get('/contact');
    expect(response.ok()).toBeTruthy();

    const body = await response.text();
    expect(body).toContain('iframe');
    expectHtmlToContain(body, 'Grease Nomads Quote Request Form');
    expectHtmlToContain(body, 'Call Us');
  });

  test('admin sign-in endpoint accepts default credentials', async ({ request }) => {
    const response = await request.post('/api/auth/signin', {
      data: { email: 'admin@greasenomads.com', password: 'admin123' },
    });

    expect(response.ok()).toBeTruthy();
    const json = await response.json();
    expect(json).toMatchObject({ success: true });
  });

  test('sitemap exists', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);
  });

  test('robots.txt exists', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);
  });
});
