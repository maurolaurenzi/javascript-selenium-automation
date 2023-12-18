import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { By } = require('selenium-webdriver');
class HomeScreen{
    buttons = {
        accountMenu: By.xpath('//li[@class="navitem nav-account js-nav-account"]'),
        watchlist: By.xpath('//li/a[contains(text(),"Watchlist")]'),
        lists: By.xpath('//li/a[contains(text(),"Lists")]'),
        search: By.xpath('//li[@class="navitem -search js-nav-search-toggle"]'),
        submit: By.xpath('//input[@type="submit" and @value="Search"]')
    };
    fields = {
        searchFilm: By.id('search-q')
    };
}
export default new HomeScreen()