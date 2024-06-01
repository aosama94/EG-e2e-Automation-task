import { Eg } from '../pages/eg-home';

const eg = new Eg();
const testData = require('../fixtures/testData.json')

describe('Easy Generator e2e scenario', () => {
    it('Cover all elements in one flow', { tags: 'e2e' }, () => {
        cy.visit(Cypress.env('egFile'));

        // Choose option1 from dropdown
        eg.dropdown().select('Option1');

        // Upload image
        cy.fixture('easygenerator.png', { encoding: null }).as('image');
        eg.uploadFile().selectFile('@image');

        // Press on open new tab button
        // To open in the same tab
        cy.window().then((win) => {
            const orig = win.open;

            win.open = function (url, target, features) {
                return orig.call(this, url, '_self', features);
            };
        });
        eg.openNewTab().click();
        cy.go(-1); //Back to the local file

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

        // Interact with hover button and its list
        eg.hoverBtn().trigger('mouseover');
        eg.topBtn().click();
        eg.hoverBtn().trigger('mouseover');
        eg.reloadBtn().click();

        // Interact with iframe
        eg.getIframeDocument().its('body').should('not.be.undefined');
        eg.headerLogo().should('exist').click();
        eg.emailToSubscribe().type(testData.email);
        eg.loginBtn().should('exist');
    });
});
