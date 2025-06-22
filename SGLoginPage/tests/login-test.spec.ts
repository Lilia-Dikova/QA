import { test, expect } from '@playwright/test';


test('Login to SiteGround', async ({page}) => {
        

  await page.goto('https://my.siteground.com/')
    
  await page.waitForLoadState("networkidle")
  await expect(page).toHaveURL('https://my.siteground.com/');


});