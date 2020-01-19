const helper = require('../lib/helper')
const loginPageObjects = require('../pageObjects/loginPageObject')
const homePageObjects = require('../pageObjects/homePageObjects')

module.exports = {
    async verifyAllElementsInEnglish(page){
       await helper.shouldExist(page,loginPageObjects.email)
       await helper.shouldExist(page,loginPageObjects.password)
       await helper.shouldExist(page,loginPageObjects.loginButton)
       await helper.shouldExist(page,loginPageObjects.forgotPassword)
       await helper.shouldExist(page,loginPageObjects.switchLanguage)
       await helper.shouldExist(page,loginPageObjects.title)
    },

    async verifyAllElementsInGerman(page){
        await helper.click(page,loginPageObjects.switchLanguage)
        await helper.shouldExist(page,loginPageObjects.title_german)
        await helper.shouldExist(page,loginPageObjects.loginButton_german)
        await helper.shouldExist(page,loginPageObjects.forgotPassword_german)
        await helper.shouldExist(page,loginPageObjects.loginTitle_german)
        await helper.shouldExist(page,loginPageObjects.welcomeBack_german)
        await helper.click(page,loginPageObjects.switchLanguage)
     },

    async invalidFormatEmailIdLogin(page,email){
        await helper.typeText(page,loginPageObjects.email,email)
        await helper.typeText(page,loginPageObjects.password,'1234Hh!!')
        await helper.click(page,loginPageObjects.loginButton)
        await helper.shouldExist(page,loginPageObjects.invalidEmailIdMessage)
    },

    async invalidAuthenticationCheck(page,email,password){
        await helper.typeText(page,loginPageObjects.email,email)
        await helper.typeText(page,loginPageObjects.password,password)
        await helper.click(page,loginPageObjects.loginButton)
        await helper.shouldExist(page,loginPageObjects.inValidLoginMessage) 
    },

    async invalidFormatEmailIdResetPassword(page,email){
        await helper.click(page,loginPageObjects.forgotPassword)
        await helper.typeText(page,loginPageObjects.email,email)
        await helper.click(page,loginPageObjects.sendEmailButton)
        await helper.shouldExist(page,loginPageObjects.invalidEmailIdMessage)
    },

    async validFormatEmailIdResetPassword(page,email){
        await helper.click(page,loginPageObjects.forgotPassword)
    },

    async loginToApp(page,email,pwd){
        await helper.typeText(page,loginPageObjects.email,email)
        await helper.typeText(page,loginPageObjects.password,pwd)
        await helper.click(page,loginPageObjects.loginButton)
        await helper.shouldExist(page,homePageObjects.logout)
    }



}