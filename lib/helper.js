
module.exports={
    click: async function (page,selector) {
        try {
            await page.waitForSelector(selector)
            await page.click(selector)
        } catch (error) {
            try {
                await page.waitForXPath(selector)
                const [input] = await page.$x(selector)
                await input.click() 
            } catch (error) {
                throw new Error(`Could not click on the selector: ${selector} OrginalError: ${error}`)
            }
        }
    },

    clearText: async function(page,selector){
        try {
            let searchInput = await page.$(selector);
            await searchInput.click({clickCount: 3});
            await searchInput.press('Backspace'); 
        } catch (error) {
            throw new Error(`Could not type text on the selector: ${selector} OrginalError: ${error}`)
        }
    },

    typeText: async function (page,selector,text) {
        try {
            await page.waitForSelector(selector)
            await page.type(selector,text)
        } catch (error) {
            try {
                await page.waitForXPath(selector)
                const [input] = await page.$x(selector)
                await input.type(text)
            } catch (error) {
                throw new Error(`Could not type text on the selector: ${selector} OrginalError: ${error}`)
            }
        }
    },

    loadUrl: async function (page,url) {
        await page.goto(url,{ waitUntil : 'networkidle0' })
    },

    getText: async function (page, selector) {
        try {
            await page.waitForSelector(selector)
            return page.$eval(selector, e => e.innerHTML)
        } catch (error) {
            throw new Error(`Could not get text of the selector: ${selector} OrginalError: ${error}`) 
        }
    },

    getAttributeValue: async function (page, selector) {
        try {
            await page.waitForSelector(selector)
            const styleNumbers = await page.$$(selector);

            for( let styleNumber of styleNumbers ) {
                const value = await page.evaluate(el => el.getAttribute('value'), styleNumber);
                return value
            }
        } catch (error) {
            throw new Error(`Could not get text of the selector: ${selector} OrginalError: ${error}`) 
        }
    },

    getCount: async function (page, selector) {
        try {
            await page.waitForSelector(selector)
            return page.$$eval(selector, items => items.length)
        } catch (error) {
            throw new Error(`Could not get count of the selector: ${selector} OrginalError: ${error}`) 
        }
    },

    waitForText: async function (page, selector,text) {
        try {
            await page.waitForSelector(selector)
            await page.waitForFunction((selector, text) => 
                document.querySelector(selector).innerText.includes(text),
                {},
                selector,
                text
            )
        } catch (error) {
            throw new Error(`Text : ${text} not found for the selector : ${selector} OrginalError: ${error}`) 
        }
    },

    pressKey: async function(page, key) {
        try {
            await page.keyboard.press(key)
        } catch (error) {
            throw new Error(`Could not press key: ${key} on the keyboard OrginalError: ${error}`)
        }
    },
 
    shouldExist: async function(page, selector) {
        try {
            await page.waitForSelector(selector, { visible: true })
        } catch (error) {
            try {
                await page.waitForXPath(selector, { visible: true })
            } catch (error1) {
                
                throw new Error(`Selector: ${selector} not exist  OrginalError: ${error1}`)
            }
        }
    },
   
    shouldNotExist: async function(page, selector) {
        try {
            await page.waitFor(() => !document.querySelector(selector))
        } catch (error) {
            throw new Error(`Selector: ${selector} is visible, but should not  OrginalError: ${error}`)
        }
    }



}