import { Page } from '@playwright/test'
import { LoginForm } from './sections/login.form'


export class LoginPage {
    page: Page;
    loginForm: LoginForm

    constructor(page: Page){
        this.page = page;
        this.loginForm = new LoginForm(page)
    }

    public async goto () {
        this.page.goto('https://login.siteground.com');
    }
}