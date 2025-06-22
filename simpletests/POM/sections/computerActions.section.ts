import { Page } from '@playwright/test';

export default class ComputerActions {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page;

    }

    get actionButton () {
        return this.page.getByRole('button', {name: "Create New Computer"})
    }

    public async clickActionButton () {
        await this.actionButton.click()
    }
}