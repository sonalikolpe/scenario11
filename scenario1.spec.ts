import { test, expect } from '@playwright/test';

test('Simple Form Demo Validation', async ({ page }) => {

    // Open application
    await page.goto('https://www.testmuai.com/selenium-playground/');

    // Click Simple Form Demo
    await page.click('text=Simple Form Demo');

    // Validate URL
    await expect(page).toHaveURL(/simple-form-demo/);

    // Test data
    const message = 'Welcome to TestMu AI';

    // Enter message
    await page.fill('#user-message', message);

    // Click button
    await page.click('button:has-text("Get Checked Value")');

    // Validate displayed message
    await expect(page.locator('#message')).toHaveText(message);

});