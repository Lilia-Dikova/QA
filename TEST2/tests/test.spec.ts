import { expect, test } from "@playwright/test";
import { RegistrationPage } from "../page/RegistrationPage";

let regPage;

test.beforeEach( async ({page}) => {
    await page.goto('https://eu.siteground.com/cloudlxc/order.htm?p=4;8;40');
    regPage = new RegistrationPage(page);
});


test('Fillout the Account Information on step 3', async () => {
    await regPage.fillOutAccountInformation('user@example.com', 'Password123', 'Password123', '5454 5454 5454 5454');

    await regPage.cardHolderName.fill('test this')


})