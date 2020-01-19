const puppeteer = require('puppeteer')
const config = require('../lib/config')
const loginPage  =  require('../pages/LoginPage')
const helper = require('../lib/helper')

describe('Login Page Tests',() => {
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
    })

    after(async function() {
        await browser.close()
    })

    beforeEach(async function(){
        await helper.loadUrl(page,config.baseUrl)
    })

    it('Verify login page elements in English',async()=>{
        await loginPage.verifyAllElementsInEnglish(page)
    })

    it('Verify login page elements in German',async()=>{
        await loginPage.verifyAllElementsInGerman(page)
    })

    it('Invalid format emaidId check1',async ()=>{
        await loginPage.invalidFormatEmailIdLogin(page,'sdfsds')
    })

    it('Invalid format emaidId check2',async ()=>{
        await loginPage.invalidFormatEmailIdLogin(page,'sdfsds@')
    })

    it('Invalid format emaidId check3',async ()=>{
        await loginPage.invalidFormatEmailIdLogin(page,'sdfsds@sdfs')
    })

    it('Invalid emailId and valid password check',async ()=>{
        await loginPage.invalidAuthenticationCheck(page,'sdfsds@sdf.com','1234Hh!!')
    })

    it('Valid emailId and invalid password check',async ()=>{
        await loginPage.invalidAuthenticationCheck(page,'getonpatient@mailinator.com','12345Hh!!')
    })

    it('Reset password with invalidFormat emailId1',async ()=>{
        await loginPage.invalidFormatEmailIdResetPassword(page,"sdsfsf")
    })

    it('Reset password with invalidFormat emailId2',async ()=>{
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
        await loginPage.invalidFormatEmailIdResetPassword(page,"sdsfsf@")
    })

    it('Reset password with invalidFormat emailId2',async ()=>{
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
        await loginPage.invalidFormatEmailIdResetPassword(page,"sdsfsf@dsdfsd")
    })
})