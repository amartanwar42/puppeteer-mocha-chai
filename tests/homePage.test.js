const puppeteer = require('puppeteer')
const config = require('../lib/config')
const homePage  =  require('../pages/HomePage')
const helper = require('../lib/helper')


describe('Home Page Tests',() => {
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

    it('Verify logout',async()=>{
        await homePage.verifyLogout(page,'getonpatient@mailinator.com','1234Hh!!')
    })
})    