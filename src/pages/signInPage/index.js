const BaseForm = require('../../framework/baseForm');
const { loginForm } = require('../../forms/index');

class SignInPage extends BaseForm {
    constructor() {
        super('//div[@id="login"]', 'Sign in page');
    }

    get loginForm() {
        return loginForm;
    }
}

module.exports = new SignInPage();