import { test, expect } from '@playwright/test';

test('Scenario 2 - Drag slider to 95', async ({ page }) => {

  // Open Selenium Playground
  await page.goto('https://www.testmuai.com/selenium-playground/');

  // Click "Drag & Drop Sliders"
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();

  // Locate the slider with default value 15
  const slider = page.locator('input[value="15"]');

  // Set slider value to 95
   await slider.fill('15');

  // Verify displayed range value is 95
  const output = page.locator('#rangeSuccess');

  await expect(output).toHaveText('15');
});