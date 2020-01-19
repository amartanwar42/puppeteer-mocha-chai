const helper = require('../lib/helper')
const profilePageObjects = require('../pageObjects/profilePageObjects')
const homePageObjects = require('../pageObjects/homePageObjects')


module.exports = {

    async updateFirstName(page,name){
        await helper.click(page,homePageObjects.profile)
        await helper.click(page,profilePageObjects.changeFirstName)
        await helper.clearText(page,profilePageObjects.firstName)
        await helper.typeText(page,profilePageObjects.firstName,name)
        await helper.click(page,profilePageObjects.saveButton)
        const firstName = await helper.getAttributeValue(page,profilePageObjects.firstName);
        return firstName
    },

    async updateLastName(page,name){
        await helper.click(page,homePageObjects.profile)
        await helper.click(page,profilePageObjects.changeLastName)
        await helper.clearText(page,profilePageObjects.lastName)
        await helper.typeText(page,profilePageObjects.lastName,name)
        await helper.click(page,profilePageObjects.saveButton)
        const lastName = await helper.getAttributeValue(page,profilePageObjects.lastName);
        return lastName
    },

    async updateInsuranceNumber(page,number){
        await helper.click(page,homePageObjects.profile)
        await helper.click(page,profilePageObjects.changeInsuranceNumber)
        await helper.clearText(page,profilePageObjects.insuranceNumber)
        await helper.typeText(page,profilePageObjects.insuranceNumber,number)
        await helper.click(page,profilePageObjects.saveButton)
        const actualNumber = await helper.getAttributeValue(page,profilePageObjects.insuranceNumber);
        return actualNumber
    },

    async updatePhoneNumber(page,number){
        await helper.click(page,homePageObjects.profile)
        await helper.click(page,profilePageObjects.changePhoneNumber)
        await helper.clearText(page,profilePageObjects.phoneNumber)
        await helper.typeText(page,profilePageObjects.phoneNumber,number)
        await helper.click(page,profilePageObjects.saveButton)
        const actualNumber = await helper.getAttributeValue(page,profilePageObjects.phoneNumber);
        return actualNumber
    }
}