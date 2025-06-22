import { test, expect} from '@playwright/test';

let x: number;
//test.describe.configure({mode: "parallel", timeout: 10000})
test('temp', async ({page})=> {
   await page.goto('https://www.siteground.com');
   await page.locator(".fake").waitFor()
})
test.describe('another', ()=> {
    test.describe.configure({mode: "parallel", timeout: 10000})
test('temp2', async ({page})=> {
   await page.goto('https://www.siteground.com');
   await page.locator(".fake").waitFor()
})
})




// test('Test Multi Tabbing', async({page, context, browser})=> {
//     await page.goto('https://abv.bg');
    
//     //create second tab
//     const newTab = await context.newPage();

//     //open newPage
//     await newTab.goto('https://siteground.com');

//     //bring page one
//     //await page.bringToFront();

//     await newTab.getByRole('button', { name: 'Get in touch button' }).hover();    
//     await page.pause()
// })