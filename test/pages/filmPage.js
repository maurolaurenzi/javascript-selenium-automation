import FilmScreen from "../locators/filmScreen.js"
export default class FilmPage {
    constructor(driver) {
        this.driver = driver;
    }

    async addToWatchlist() {
        const addToWatchlistButton = await this.driver.findElement(FilmScreen.buttons.addToWatchlist);
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });", addToWatchlistButton);
        await addToWatchlistButton.click();
    }

    async removeFromWatchlist() {
        await this.driver.findElement(FilmScreen.buttons.removeFromWatchlist).click();
    }
}