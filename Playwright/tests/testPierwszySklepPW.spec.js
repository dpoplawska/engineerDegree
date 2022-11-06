const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://www.sklep.pw.edu.pl/en
  await page.goto('https://www.sklep.pw.edu.pl/en');

  // Click text=Skip to navigation Skip to content PolitechnikaWarszawskaSklepInternetowy Search >> [placeholder="Search products…"]
  await page.locator('text=Skip to navigation Skip to content PolitechnikaWarszawskaSklepInternetowy Search >> [placeholder="Search products…"]').click();

  // Fill text=Skip to navigation Skip to content PolitechnikaWarszawskaSklepInternetowy Search >> [placeholder="Search products…"]
  await page.locator('text=Skip to navigation Skip to content PolitechnikaWarszawskaSklepInternetowy Search >> [placeholder="Search products…"]').fill('koszulka');

  // Press Enter
  await page.locator('text=Skip to navigation Skip to content PolitechnikaWarszawskaSklepInternetowy Search >> [placeholder="Search products…"]').press('Enter');
  await expect(page).toHaveURL('https://www.sklep.pw.edu.pl/en?s=koszulka&post_type=product');

  // Click text=Koszulka Zespołu Pieśni i Tańca 35,00 zł incl. VAT >> img
  await page.locator('text=Koszulka Zespołu Pieśni i Tańca 35,00 zł incl. VAT >> img').click();
  await expect(page).toHaveURL('https://www.sklep.pw.edu.pl/en/produkty/koszulka-zespolu-piesni-i-tanca');

  // Select woman
  await page.locator('select[name="attribute_pa_rodzaj"]').selectOption('woman');

  // Select s-en
  await page.locator('select[name="attribute_pa_rozmiar"]').selectOption('s-en');

  // Click text=Add to cart
  await page.locator('text=Add to cart').click();
  await expect(page).toHaveURL('https://www.sklep.pw.edu.pl/en/produkty/koszulka-zespolu-piesni-i-tanca');

  // Click div[role="alert"] >> text=View cart
  await page.locator('div[role="alert"] >> text=View cart').click();
  await expect(page).toHaveURL('https://www.sklep.pw.edu.pl/en/cart');

  // Click text=×
  await page.locator('text=×').click();

});