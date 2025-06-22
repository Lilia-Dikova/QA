import { FrameLocator, Locator, Page } from '@playwright/test'
import { LoginRecoveryForm } from '../sections/loginRecoveryForm';


export class LoginRecoveryPage {
    private readonly page: Page;
    loginRecoveryForm: LoginRecoveryForm;
    

    constructor(page: Page) {
        this.page = page;
        this.loginRecoveryForm = new LoginRecoveryForm(page);
    
    }

    public async goto () {
     await this.page.goto('https://login.siteground.com/recovery');
    }
        
}