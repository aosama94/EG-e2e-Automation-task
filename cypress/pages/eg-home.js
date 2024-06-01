export class Eg {
    // Request creation page
    dropdown() {
        return cy.get('#dropdown-class-example');
    }

    uploadFile() {
        return cy.get('input[type="file"][name="img"]');
    }

    openNewTab() {
        return cy.get('button#opentab');
    }

    aleartText() {
        return cy.get('#name');
    }

    alert() {
        return cy.get('#alertbtn');
    }

    confirmation() {
        return cy.get('#confirmbtn');
    }

    hide() {
        return cy.get('#hide-textbox');
    }

    show() {
        return cy.get('#show-textbox');
    }

    displayedText() {
        return cy.get('#displayed-text');
    }

    hoverBtn() {
        return cy.get('.hover-btn');
    }

    topBtn() {
        return cy.contains('Top');
    }

    reloadBtn() {
        return cy.contains('Reload');
    }

    iframe() {
        return cy.contains('#courses-iframe`');
    }

    getIframeDocument = () => {
        return cy
            .get('#courses-iframe')
            .its('0.contentDocument')
            .should('exist');
    };
    headerLogo() {
        return this.getIframeDocument().find('a.header__logo');
    }
    emailToSubscribe() {
        return this.getIframeDocument().find(
            'input[placeholder="Enter your business email"]'
        );
    }
    loginBtn() {
        return this.getIframeDocument().find(
            '[class="top-links"] li[class="login"]>a'
        );
    }
}
export default Eg;
