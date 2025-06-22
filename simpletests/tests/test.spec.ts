import { expect} from '@playwright/test';
import { ComputerPage } from '../POM/pages/Computer.page.ts';
import { AddComputerPage } from '../POM/pages/addComputer.page.ts';
import { test } from '../fixtures/basePage.ts'
import { LoginRecoveryPage } from '../POM/pages/loginRecovery.page.ts';
import { send } from 'process';

const computer = {
    computer: "Custom Computer",
    introDate: "1991-01-01",
    discontinuedDate: "2002-02-02",
    company: "Madams company"
}


const POST_URL = 'https://uapi.siteground.com/v1/auth/passreset/sendemail'

test('Basic test login form', async({page}) => {
    const loginRecoveryPage = new LoginRecoveryPage(page);

    await loginRecoveryPage.goto();

    let requestPromise = page.waitForRequest(POST_URL);
    let resonsePromise = page.waitForResponse(POST_URL);

    const username = 'petacat.biz'
    
    await loginRecoveryPage.loginRecoveryForm.fillAndSubmitForm(username);
    
    const request = await requestPromise;
    const response = await resonsePromise;
    
    
    const sendData = request.postDataJSON();
    const body = await response.json();
    
    const recaptcha_token = await (loginRecoveryPage.captchaToken).inputValue();
    const sendRequest = {
        'username' : username,
        'recaptcha_token': recaptcha_token
    }
    
    console.log(sendData);
    console.log(sendRequest)

    //expect(sendData).toEqual(sendRequest)
    // console.log(response.status())
    // console.log(body);
 
       

})




test.skip('Basic test', async({page}) => {
    await page.goto('https://liliad38.sg-host.com');

    await page.getByRole('button', {name: "Add New Computer"}).click();

    await page.getByLabel("Computer Name").fill(computer.computer);
    await page.getByLabel("Introduced Date").fill(computer.introDate);
    await page.getByLabel("Discontinued Date").fill(computer.discontinuedDate);
    await page.getByLabel("Company").fill(computer.company);

    await page.getByRole('button', {name: "Create New Computer"}).click();
    await expect(page.getByText("Custom Computer")).toBeVisible();

})

test.skip('Basic test POM', async({page}) => {
    const computerPage = new ComputerPage(page);
    const addComputerPage = new AddComputerPage(page);

    await computerPage.goto();

    await computerPage.clickAddComputerButton();
    await addComputerPage.addNewComputer(computer);

    await expect(page.getByText(computer.computer)).toBeVisible();
})

      
test.skip('POM with custom fixtures', async({addComputersPage, computersPage, page}) => {

   await computersPage.goto();
   await computersPage.clickAddComputerButton();

   await addComputersPage.addNewComputer(computer);

   await expect(page.getByText(computer.computer)).toBeVisible();
})

