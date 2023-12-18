import LoginScreen from "../locators/loginScreen.js"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require('dotenv').config();

export default class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async login() {
        console.log(process.env);
        await this.driver.findElement(LoginScreen.buttons.signIn).click();
        await this.driver.findElement(LoginScreen.fields.username).sendKeys(process.env.LETTERBOXD_USERNAME);
        await this.driver.findElement(LoginScreen.fields.password).sendKeys(process.env.LETTERBOXD_PASSWORD);
        await this.driver.findElement(LoginScreen.buttons.submit).click();
    }
}