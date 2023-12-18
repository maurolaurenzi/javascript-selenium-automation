import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { By } = require('selenium-webdriver');
class ListsScreen{
    buttons = {
        startNewList: By.xpath('//*[@class="sidebar"]//a[contains(text(),"Start a new list")]'),
        addFilm: By.xpath('//*[contains(text(),"Add a film")]'),
        save: By.id('list-edit-save'),
        editOrDelete: By.xpath('//a[contains(text(),"Edit or delete this list")]'),
        deleteList: By.id('delete-film-list'),
        confirmDeletion: By.xpath('//div[@id="confirm-modal"]//a[text()="Delete"]')
    };
    fields = {
        listName: By.xpath('//input[@type="text" and @name="name"]'),
        listDescription: By.xpath('//textarea[@name="notes"]'),
        filmName: By.id('frm-list-film-name'),
        filmOption: (name) => By.xpath(`//li[contains(text(),'${name}')]`)
    };
    txts = {
        listsCreated: (name) => By.xpath(`//section[@class="list-set"]//a[contains(text(),'${name}')]`)
    };
    cards = {
        movieInList: (name) => By.xpath(`//span[@class="frame-title" and contains(text(),'${name}')]`)
    }
}
export default new ListsScreen()