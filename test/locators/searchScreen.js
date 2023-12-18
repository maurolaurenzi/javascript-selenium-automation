import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { By } = require('selenium-webdriver');
class SearchScreen{
    cards = {
        firstMovieResult: (movieName) => By.xpath(`//ul[@class="results"]/li[1]//a[contains(text(),'${movieName}')]`)
    }
}
export default new SearchScreen()