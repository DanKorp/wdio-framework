const BaseForm = require('../../framework/baseForm');
const { headerForm } = require('../../forms/index');

class MainPage extends BaseForm {
    constructor() {
        super('//div[contains(@class, "application-main")]', 'Main page');
    }

    get headerForm() {
        return headerForm;
    }
}

module.exports = new MainPage();