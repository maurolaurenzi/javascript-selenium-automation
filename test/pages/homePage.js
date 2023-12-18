import HomeScreen from "../locators/homeScreen.js"
import SearchScreen from "../locators/searchScreen.js"
export default class HomePage {
    constructor(driver) {
        this.driver = driver;
    }

    async goToLists() {
        await this.driver.findElement(HomeScreen.buttons.accountMenu).click();
        await this.driver.findElement(HomeScreen.buttons.lists).click();
    }

    async goToFilm(filmName) {
        await this.driver.findElement(HomeScreen.buttons.search).click();
        await this.driver.findElement(HomeScreen.fields.searchFilm).sendKeys(filmName);
        await this.driver.findElement(HomeScreen.buttons.submit).click();
        await this.driver.findElement(SearchScreen.cards.firstMovieResult(filmName)).click();
    }

    async goToWatchlist() {
        await this.driver.findElement(HomeScreen.buttons.accountMenu).click();
        await this.driver.findElement(HomeScreen.buttons.watchlist).click();
        await this.driver.sleep(3000);
    }
}