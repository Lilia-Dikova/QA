import { Locator, Page } from '@playwright/test'

export class LoginForm {
    page: Page
    section: Locator;
    inputUsername: Locator;
    inputPassword: Locator;
    button: Locator;


    constructor(page: Page) {
        this.page = page;
        this.section = page.getByTestId('container');
        this.inputUsername = this.section.getByTestId('input-username');
        this.inputPassword = this.section.getByTestId('input-password');
        this.button = this.section.getByTestId('button');
    }

    async fillFormAndLogin ({
        username,
        password
    }: user) {
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.button.click();
    }
}

export interface user {
    username: string,
    password: string
}