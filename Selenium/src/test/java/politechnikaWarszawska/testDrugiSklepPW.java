package politechnikaWarszawska;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class testDrugiSklepPW {
WebDriver driver;

@Test
public void testDrugiSklepPW() {
    ChromeOptions options = new ChromeOptions();
    options.addArguments("--lang=pl");
    options.addArguments("--start-maximized");
    WebDriverManager.chromedriver().setup();
    driver = new ChromeDriver(options);

    driver.get("https://www.sklep.pw.edu.pl/");
    driver.findElement(By.xpath("//a[normalize-space()='Moje konto']")).click();
    driver.findElement(By.id("username")).sendKeys("testpwinz@outlook.com");
    driver.findElement(By.id("password")).sendKeys("Test9876!!");
    driver.findElement(By.xpath("//button[normalize-space()='Zaloguj się']")).click();
    driver.findElement(By.xpath("//a[normalize-space()='Szczegóły konta']")).click();
    driver.findElement(By.id("account_first_name")).clear();
    driver.findElement(By.id("account_first_name")).sendKeys("test");
    driver.findElement(By.id("account_last_name")).clear();
    driver.findElement(By.id("account_last_name")).sendKeys("test");
    driver.findElement(By.xpath("//button[normalize-space()='Zapisz zmiany']")).click();
    driver.findElement(By.xpath("//*[contains(text(),'Zmieniono szczegóły konta')]"));
    driver.findElement(By.xpath("//a[normalize-space()='Wyloguj']")).click();
    driver.findElement(By.xpath("//*[contains(text(),'Logowanie')]"));
    driver.close();
    driver.quit();
}
}
