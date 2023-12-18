import FilmScreen from "../locators/filmScreen.js"
export default class FilmPage {
    constructor(driver) {
        this.driver = driver;
    }

    async addToWatchlist() {
        // scroll down to the middle of the page to avoid click intercepted by ad
        await this.driver.executeScript('window.scrollTo(0, 2500)');
        const addToWatchlistButton = await this.driver.findElement(FilmScreen.buttons.addToWatchlist);
        await addToWatchlistButton.click();
    }

    async removeFromWatchlist() {
        // scroll down to the middle of the page to avoid click intercepted by ad
        await this.driver.executeScript('window.scrollTo(0, 2500)');
        await this.driver.findElement(FilmScreen.buttons.removeFromWatchlist).click();
    }
}