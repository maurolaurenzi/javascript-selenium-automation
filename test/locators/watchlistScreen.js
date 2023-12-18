import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { By } = require('selenium-webdriver');
class WatchlistScreen{
    cards = {
        movieInList: (name) => By.xpath(`//a[contains(@data-original-title,'${name}')]`)
    }
}
export default new WatchlistScreen()