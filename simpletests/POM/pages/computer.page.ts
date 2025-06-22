import { Locator, Page } from '@playwright/test'

export class ComputerPage {
  private readonly page: Page;
  //public readonly addComputerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    //this.addComputerButton = this.page.getByRole('button', { name: "Add New Computer" });

  }

    get addComputerButton() {
        return this.page.getByRole('button', { name: "Add New Computer" });
    }


    public async goto() {
        await this.page.goto('https://liliad38.sg-host.com/index.html')
    }

    public async clickAddComputerButton() {
        await this.addComputerButton.click();
    }

}