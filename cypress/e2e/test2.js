///<reference types="Cypress"/>
describe('test css selector', () => {
    it('test1', () => {
        cy.visit("https://automationteststore.com/")
        //cy.get("img[src='//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg']").click()
        cy.get("a[title='Flash Bronzer Body Gel']").click()
       //cy.get("//a[text()='Flash Bronzer Body Gel']")
    });
});