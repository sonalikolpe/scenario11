import { test, expect } from '@playwright/test';

test('Input Form Submit Validation', async ({ page }) => {

  // 1. Open Selenium Playground
  await page.goto('https://www.testmuai.com/selenium-playground/');

  // Click "Input Form Submit"
  await page.getByRole('link', { name: 'Input Form Submit' }).click();

  // 2. Click Submit without filling any information
  await page.getByRole('button', { name: 'Submit'}).click();

  // 3. Assert validation message
  const nameField = page.locator('#name');
  const validationMessage = await nameField.evaluate(
    (el: HTMLInputElement) => el.validationMessage
  );

  expect(validationMessage).toContain('Please fill out this field');

  // 4. Fill form fields
  await page.locator('#name').fill('John Doe');
  await page.locator('#inputEmail4').fill('johndoe@example.com');
  await page.locator('#inputPassword4').fill('Password@123');
  await page.locator('#company').fill('TestMu AI');
  await page.locator('#websitename').fill('https://www.example.com');

  // 5. Select United States from Country dropdown
  await page.selectOption('select[name="country"]', {label:'United States'});
  await page.locator('#inputCity').fill('New York');
  await page.locator('#inputAddress1').fill('123 Main St');
  await page.locator('#inputAddress2').fill('Apt 4B');
  await page.locator('#inputState').fill('New York');
  await page.locator('#inputZip').fill('10001');
  await page.waitForTimeout(500);

  // 6. Click Submit
  await page.getByRole('button',{ name: 'Submit' }).click();

  // 7. Validate success message
  await expect(page.getByText('Thanks for contacting us, we will get back to you shortly.')).toBeVisible();
});