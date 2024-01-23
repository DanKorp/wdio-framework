const { mainPage, signInPage, homePage } = require('../../pages/index');
const { assert } = require('chai');
const creds = require('../../environment/credentials');

describe("GitHub", () => {

    it("should open", async () => {

        browser.url("https://github.com");
        assert.isTrue(await mainPage.waitForFormIsOpened(), `Form "${mainPage.getFormName}" is not opened.`);

        await mainPage.headerForm.clickSignInButton();
        assert.isTrue(await signInPage.waitForFormIsOpened(), `Form "${signInPage.getFormName}" is not opened.`);

        const login = creds.testUser.login;
        const password = creds.testUser.password;
        await signInPage.loginForm.loginIntoAccount(login, password);

        assert.isTrue(await homePage.waitForFormIsOpened(), `Form "${homePage.getFormName}" is not opened.`)
    })
})