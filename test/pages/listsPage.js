import ListsScreen from "../locators/listsScreen.js"

export default class ListsPage {
    constructor(driver) {
        this.driver = driver;
    }

    async createNewList(listName, description, films) {
        await this.driver.findElement(ListsScreen.buttons.startNewList).click();
        await this.driver.findElement(ListsScreen.fields.listName).sendKeys(listName);
        await this.driver.findElement(ListsScreen.fields.listDescription).sendKeys(description);
        for (const film of films) {
            await this.driver.findElement(ListsScreen.buttons.addFilm).click();
            await this.driver.findElement(ListsScreen.fields.filmName).sendKeys(film);
            await this.driver.findElement(ListsScreen.fields.filmOption(film)).click();
        }
        await this.driver.sleep(3000);
        await this.driver.findElement(ListsScreen.buttons.save).click();
        await this.driver.sleep(3000);
    }

    async goToList(listName){
        await this.driver.findElement(ListsScreen.txts.listsCreated(listName)).click();
        await this.driver.sleep(3000);
    }

    async deleteList(){
        await this.driver.findElement(ListsScreen.buttons.editOrDelete).click();
        await this.driver.findElement(ListsScreen.buttons.deleteList).click();
        await this.driver.findElement(ListsScreen.buttons.confirmDeletion).click();
        await this.driver.sleep(3000);
    }
}