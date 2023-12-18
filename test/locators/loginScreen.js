import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { By } = require('selenium-webdriver');
class LoginScreen{
    buttons = {
        signIn: By.xpath('//span[text()="Sign in"]'),
        submit: By.xpath('//input[@type="submit" and @value="Sign in"]'),
    };
    fields = {
        username: By.id('username'),
        password: By.xpath('//input[@type="password"]'),
    };
}
export default new LoginScreen()