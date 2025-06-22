import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
})

const TODO_ITEMS = [
  'Drink coffee',
  'Go to work',
  'Eat lunch'
] as const;

test.describe('New ToDo', () => {


  test.only( 'should allow me to add to do items', async ({ page }) => {

    const field = page.getByPlaceholder('What needs to be done?')

    //create 1st to do
    await field.fill(TODO_ITEMS[0]);
    await field.press('Enter')

    await expect(page.getByTestId('todo-item')).toHaveText([TODO_ITEMS[0]])

    //create 2nd to do
    await field.fill(TODO_ITEMS[1]);
    await field.press('Enter');

    await expect(page.getByTestId('todo-item')).toHaveText([
      TODO_ITEMS[0]
      , TODO_ITEMS[1]
    ]);


    await checkNumberOfTodosInLocalStorage(page, 2)
  })
})


async function checkNumberOfTodosInLocalStorage( page: Page, expected: number){
  return await page.waitForFunction(e => {
  return JSON.parse(localStorage['react-todos']).length === e;
 }, expected)

}


