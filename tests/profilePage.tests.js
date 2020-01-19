const puppeteer = require('puppeteer')
const expect = require('chai').expect
const config = require('../lib/config')
const loginPage  =  require('../pages/LoginPage')
const profilePage  =  require('../pages/ProfilePage')
const helper = require('../lib/helper')
const utils = require('../lib/utils')


describe('Profile Page Tests',() => {
    let browser
    let page
    
    before(async function(){
        browser = await puppeteer.launch({
            headless:config.isHeadless,
            slowMo:config.slowMo,
            devtools:config.isDevtools,
            timeout:config.launchTimeout
        })
        page = await browser.newPage()
        await page.setDefaultTimeout(config.waitingTimeout)
        await page.setViewport({
            width:config.viewRepotWidth,
            height:config.viewRepotHeight
        })
        await helper.loadUrl(page,config.baseUrl)
        await loginPage.loginToApp(page,'getonpatient@mailinator.com','1234Hh!!')
    })

    after(async function() {
        await browser.close()
    })
  
    it('Update first name test',async()=>{
        const expectedName=await utils.generateName(6)
        const actualName = await profilePage.updateFirstName(page,expectedName)
        await expect(actualName).to.equal(expectedName)
    })

    it('Update last name test',async()=>{
        const expectedName=await utils.generateName(6)
        const actualName = await profilePage.updateLastName(page,expectedName)
        await expect(actualName).to.equal(expectedName)
    })

    it('Update insurance number test',async()=>{
        const expectedNumber=await utils.generateNumbers()
        const actualNumber = await profilePage.updateInsuranceNumber(page,expectedNumber)
        await expect(actualNumber).to.equal(expectedNumber)
    })
})    