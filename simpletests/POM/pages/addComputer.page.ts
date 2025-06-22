import {Page} from '@playwright/test'
import ComputerActions from '../sections/computerActions.section';
import ComputerDetails from '../sections/computerDetails.section';

export class AddComputerPage {
    private readonly page: Page
    computerAction: ComputerActions;
    computerDetails: ComputerDetails

    constructor(page: Page) {
        this.page = page;
        this.computerAction = new ComputerActions(page);
        this.computerDetails = new ComputerDetails(page)
     
    }

    public async goto () {
        await this.page.goto('https://liliad38.sg-host.com/create.html')
    }

    public async addNewComputer(computer) {
        await this.computerDetails.fillComputerDetails(computer);
        await this.computerAction.clickActionButton();
    }
   
        
}

