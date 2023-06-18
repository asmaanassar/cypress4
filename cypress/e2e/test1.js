///<reference types="Cypress"/>
describe('testing Automation test store', () => {
    it('testing1', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
       cy.get('#ContactUsFrm_first_name').type("AsmaNassar")
       cy.get("input[id='ContactUsFrm_email']").type("asmaanassar89@gmail.com")
       cy.get("textarea[name='enquiry']").type("this is a test")
       cy.get("button[title='Submit']").click()
    });


    it.only('test2', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
       cy.get('#ContactUsFrm_first_name').type("AsmaNassar")
       cy.get("input[id='ContactUsFrm_email']").type("asmaanassar89@gmail.com")
       cy.get("textarea[name='enquiry']").type("this is a test")
       cy.get("button[title='Submit']").click()
       cy.get('.mb40 > :nth-child(3)').should("have.text","Your enquiry has been successfully sent to the store owner!")
        
    });
});
        
