const BaseForm = require('../../framework/baseForm');
const Element = require('../../framework/baseElement');

class HeaderForm extends BaseForm {
    constructor() {
        super('//header[contains(@class, "Header")]', 'Header form');
    }

    get signInButton() {
        return new Element('//a[contains(@class, "sign-in")]', 'Sign in button');
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }
}

module.exports = new HeaderForm();