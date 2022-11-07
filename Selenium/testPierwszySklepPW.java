package politechnikaWarszawska;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class testPierwszySklepPW {
    WebDriver driver;
    private WebElement wyszukiwarka;

    @Test
    public void testPierwszySklepPW() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--lang=pl");
        options.addArguments("--start-maximized");
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver(options);

        driver.get("https://www.sklep.pw.edu.pl/");
        wyszukiwarka = driver.findElement(By.id("woocommerce-product-search-field-0"));
        wyszukiwarka.sendKeys("koszulka");
        wyszukiwarka.sendKeys(Keys.ENTER);
        driver.findElement(By.xpath("//a[normalize-space()='Wybierz opcje']")).click();
        driver.findElement(By.id("pa_kolor")).click();
        driver.findElement(By.xpath("//select[@id='pa_kolor']/option[2]")).click();
        driver.findElement(By.id("pa_rozmiar")).click();
        driver.findElement(By.xpath("//select[@id='pa_rozmiar']/option[2]")).click();
        driver.findElement(By.xpath("//button[text()='Dodaj do koszyka']")).click();
        driver.findElement(By.xpath("//div[@class='woocommerce']//a[@class='button wc-forward']")).click();
        driver.findElement(By.xpath("//a[@class='remove']")).click();
        driver.close();
        driver.quit();
    }
}
