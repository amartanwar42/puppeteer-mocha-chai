const helper = require('../lib/helper')
const homePageObjects = require('../pageObjects/homePageObjects')
const loginPageObject= require('../pageObjects/loginPageObject')

module.exports = {
    async verifyLogout(page,emailid,pwd){
        await helper.typeText(page,loginPageObject.email,emailid)
        await helper.typeText(page,loginPageObject.password,pwd)
        await helper.click(page,loginPageObject.loginButton)
        await helper.click(page,homePageObjects.logout)
        await helper.shouldExist(page,loginPageObject.title)

        await page.waitFor(10000)
    }
}