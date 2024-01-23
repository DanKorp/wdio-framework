const BaseForm = require('../../framework/baseForm');
const Element = require('../../framework/baseElement');

class LoginForm extends BaseForm {
    constructor() {
        super('//div[contains(@class, "auth-form-body")]', 'Login form');
    }

    get loginInpuField() {
        return new Element('//input[@id="login_field"]', 'Login input field');
    }

    get passwordInputField() {
        return new Element('//input[@id="password"]', 'Password input field');
    }

    get signInButton() {
        return new Element('//input[contains(@class, "sign-in-button")]', 'Sign in button');
    }

    async typeLogin(value) {
        await this.loginInpuField.clearAndType(value);
    }

    async typePassword(value) {
        await this.passwordInputField.clearAndTypeSecret(value);
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    async loginIntoAccount(login, password) {
        await this.typeLogin(login);
        await this.typePassword(password);
        await this.clickSignInButton();
    }
}

module.exports = new LoginForm();