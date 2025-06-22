import { FrameLocator, Locator, Page } from '@playwright/test';

export class RegistrationPage {
    /**
 * @param {import('playwright').Page} page
 */
    readonly page: Page;
    readonly form: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPass: Locator;
    readonly cardNumber: Locator;
    readonly cardHolderName: Locator;
    readonly paymentInfo: FrameLocator;


    constructor(page: Page) {
        this.page = page;
        this.form = page.locator('#orderForm');

        this.email = this.form.getByRole('textbox', { name: 'Email*' })
        this.password = this.form.locator('[name=password]');
        this.confirmPass = this.form.locator('[name=password2]');

        this.paymentInfo = this.form.frameLocator('#payments_frame');
        this.cardNumber = this.paymentInfo.locator('#card_number')
        this.cardHolderName = this.paymentInfo.locator('#cardholder_name')
    }


    async fillOutAccountInformation(email: string, password: string, confirmPass: string, cardNum: string) {

        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPass.fill(confirmPass);
        await this.cardNumber.fill(cardNum)
        
    }
}