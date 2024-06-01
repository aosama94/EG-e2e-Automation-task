import { Eg } from '../pages/eg-home';

const eg = new Eg();
const testData = require('../fixtures/testData.json')

describe('Easy Generator', () => {

    beforeEach('Open the .html file', () => {
        cy.visit(Cypress.env('egFile'));
      });
    it('Verify dropdown list field', { tags: 'dropdown' }, () => {

        // Choose option1 from dropdown
        eg.dropdown().select('Option1');
        eg.dropdown().select('Option2');
        eg.dropdown().select('Option3');
    });
    it('Verify upload file field', { tags: 'upload' }, () => {
        // Upload image
        cy.fixture('easygenerator.png', { encoding: null }).as('image');
        eg.uploadFile().selectFile('@image');
    });
    it('Verify open in new tab button', { tags: 'openTab' }, () => {

        // Press on open new tab button
        eg.openNewTab().click();
    });
    it('Verify Message in Alert & confirmation', { tags: ['alert', 'confirmation'] }, () => {

        // Read text from .text file and type it into the alert/confirmation text field
        // Show the message from alret and confirmation
        cy.task('readFile', 'cypress/fixtures/alert-text.txt').then((text) =>
            eg.aleartText().type(text)
        );
        eg.alert().click();
        cy.task('readFile', 'cypress/fixtures/alert-text.txt').then((text) =>
            eg.aleartText().type(text)
        );
        eg.confirmation().click();
    });
    it('Verify hover button & its list', { tags: 'hover' }, () => {

        // Interact with hover button and its list
        eg.hoverBtn().trigger('mouseover');
        eg.topBtn().click();
        eg.hoverBtn().trigger('mouseover');
        eg.reloadBtn().click();
    });
    it('Verify interaction with iframe', { tags: 'iframe' }, () => {

        // Interact with iframe
        eg.getIframeDocument().its('body').should('not.be.undefined');
        eg.headerLogo().should('exist').click();
        eg.emailToSubscribe().type(testData.email);
        eg.loginBtn().should('exist');
    });
});
