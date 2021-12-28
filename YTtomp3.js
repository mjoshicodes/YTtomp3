const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.goto('https://320ytmp3.com/en31/');
await page.$eval('#go > div > input.form-control.form-control-lg', el => el.value = 'https://www.youtube.com/watch?v=kJQP7kiw5Fk');
await page.click("#go > div > button");
await page.waitForNavigation();
await page.click("#cvt-btn");

//await browser.close();
})();
// document.querySelector("#go > div > button")
// document.querySelector("#cvt-btn")
