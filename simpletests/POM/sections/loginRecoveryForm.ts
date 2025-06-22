import { Locator, Page } from '@playwright/test'


export class LoginRecoveryForm {
    readonly page: Page
    readonly form: Locator;
    readonly button: Locator;
    readonly username: Locator;

    constructor (page: Page) {
        this.page = page;
        this.form = this.page.locator('form');
        this.username = this.form.getByTestId("form-field");
        this.button = this.form.getByTestId('button')
    }

    public async fillAndSubmitForm (userame: string) {
        await this.username.fill(userame);
        await this.button.click();
    }
}