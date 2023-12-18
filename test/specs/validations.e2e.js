import LoginPage from '../pages/loginPage.js';
import HomePage from '../pages/homePage.js';
import ListsPage from '../pages/listsPage.js';
import FilmPage from '../pages/filmPage.js';
import testData from '../data/testData.json' assert { type: 'json' };
import listsScreen from '../locators/listsScreen.js';
import { createRequire } from "module";
import { expect } from 'chai';
import watchlistScreen from '../locators/watchlistScreen.js';

const require = createRequire(import.meta.url);
const chrome = require('selenium-webdriver/chrome');
require('dotenv').config();
const { Builder } = require('selenium-webdriver');
let driver;
let chromeOptions = new chrome.Options();
chromeOptions.addArguments('--disable-extensions');
driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
driver.manage().setTimeouts({ implicit: 10000 });
const loginPage = new LoginPage(driver);
const homePage = new HomePage(driver);
const listsPage = new ListsPage(driver);
const filmPage = new FilmPage(driver);

function generateRandomNumber() {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Create a new list and add films to watchlist', function() {
    this.timeout(300000);

    before(async function() {
        // log in to letterboxd
        await driver.get("https://letterboxd.com");
        await driver.manage().window().maximize();
        await loginPage.login();
    });

    after(() => driver && driver.quit());

    it('should validate that user is able to create a new list, add a film to it and delete it', async function() {
        await homePage.goToLists();
        const randomNumber = generateRandomNumber();
        const listName = `test-list-${randomNumber}`
        await listsPage.createNewList(listName,testData.testDescription, [testData.mulhollandDrive]);
        await homePage.goToLists();
        const listCreated = await driver.findElement(listsScreen.txts.listsCreated(listName));
        expect(await listCreated.isDisplayed()).to.be.true;
        await listsPage.goToList(listName);
        await listsPage.deleteList();
    });

    it('should validate that user is able to add a movie to watchlist, then remove it', async function() {
        await homePage.goToFilm(testData.homeAlone);
        await filmPage.addToWatchlist();
        await homePage.goToWatchlist();
        let filmInWatchlist = await driver.findElement(watchlistScreen.cards.movieInList(testData.homeAlone));
        expect(await filmInWatchlist.isDisplayed()).to.be.true;
        // removing film from watchlist
        await homePage.goToFilm(testData.homeAlone);
        await filmPage.removeFromWatchlist();
    });
})