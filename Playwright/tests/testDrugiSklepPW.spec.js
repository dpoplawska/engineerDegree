import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.sklep.pw.edu.pl/');

  await page.goto('https://www.sklep.pw.edu.pl/en');

  await page.goto('https://www.sklep.pw.edu.pl/en/my-account');

  await page.getByLabel('Username or email address *').fill('testpwinz@outlook.com');

  await page.getByLabel('Username or email address *').press('Tab');

  await page.locator('form:has-text("Username or email address * Password * Remember me Log in Lost your password?")').getByLabel('Password *').fill('Test9876!!');

  await page.locator('form:has-text("Username or email address * Password * Remember me Log in Lost your password?")').getByLabel('Password *').press('Enter');
  await expect(page).toHaveURL('https://www.sklep.pw.edu.pl/en/my-account');

  await page.getByRole('link', { name: ' Account details' }).click();
  await expect(page).toHaveURL('https://www.sklep.pw.edu.pl/en/my-account/edit-account');

  await page.getByLabel('First name *').dblclick();

  await page.getByLabel('First name *').dblclick();

  await page.getByLabel('First name *').fill('Diana');

  await page.getByLabel('First name *').press('Tab');

  await page.getByLabel('Last name *').fill('Popławska');

  await page.getByRole('button', { name: 'Save changes' }).click();
  await expect(page).toHaveURL('https://www.sklep.pw.edu.pl/en/my-account');

  await page.getByRole('link', { name: ' Logout' }).click();
  await expect(page).toHaveURL('https://www.sklep.pw.edu.pl/en/my-account');

});