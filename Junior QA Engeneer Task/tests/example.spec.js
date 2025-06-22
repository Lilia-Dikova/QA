import {test, expect} from '@playwright/test';


test ('has title', async ({page}) => {
    await page.goto('https://abc13514.sg-host.com/');
    await expect(page).toHaveTitle(/User Registration Form/);
})