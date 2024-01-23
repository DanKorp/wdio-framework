const BaseForm = require('../../framework/baseForm');

class HomePage extends BaseForm {
    constructor() {
        super('//div[contains(@class, "feed-main")]', 'Home page');
    }
}

module.exports = new HomePage();