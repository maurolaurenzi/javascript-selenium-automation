import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { By } = require('selenium-webdriver');
class FilmScreen{
    buttons = {
        addToWatchlist: By.xpath('//a[contains(@class,"add-to-watchlist")]'),
        removeFromWatchlist: By.xpath('//a[contains(@class,"remove-from-watchlist")]')
    };
}
export default new FilmScreen()