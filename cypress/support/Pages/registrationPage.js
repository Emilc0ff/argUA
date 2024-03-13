export class RegistrationPage {
    constructor() {
        this.nameInput = 'input[id="registration-form-fname"]'
        this.lastNameInput = 'input[id="registration-form-lname"]'
        this.phoneInput = 'input[id="registration-form-phone"]'
        this.emailInput = 'input[id="registration-form-email"]'
        this.emailConfirmationInput = 'input[id="registration-form-email-confirm"]'
        this.passwordInput = 'input[id="registration-form-password"]'
        this.passwordConfirmationInput = 'input[id="registration-form-password-confirm"]'
        this.checkbox = 'input[type="checkbox"]'
        this.registerButton = 'Regístrese'
        this.nameError = '#form-fname-error'
        this.lastNameError = '#form-lname-error'
        this.emailError = ':nth-child(4) > #form-email-error'
        this.emailConfirmationError = '#form-email-confirm-error'
        this.passwordConfirmationError = '#form-password-confirm-error'
        this.passwordError = ':nth-child(6) > #form-password-error'

    };

    getNameInput() {
        return cy.get(this.nameInput)
    };

    getLastNameInput() {
        return cy.get(this.lastNameInput)
    };

    getPhoneInput() {
        return cy.get(this.phoneInput)
    };

    getEmailInput() {
        return cy.get(this.emailInput)
    };

    getEmailConfirmationInput() {
        return cy.get(this.emailConfirmationInput)
    }

    getPasswordInput() {
        return cy.get(this.passwordInput)
    };

    getPasswordConfirmationInput() {
        return cy.get(this.passwordConfirmationInput)
    };

    getCheckBox() {
        return cy.get(this.checkbox)
    };

    clickRegisterButton() {
        cy.contains(this.registerButton).click();
    };

    getNameError() {
    return    cy.get(this.nameError)
    };

    getLastNameError() {
    return    cy.get(this.lastNameError)
    };

    getEmailError() {
    return    cy.get(this.emailError)
    };

    getEmailConfirmationError() {
    return    cy.get(this.emailConfirmationError)
    };

    getPasswordConfirmationError() {
    return    cy.get(this.passwordConfirmationError)
    };

    getPasswordError() {
        return cy.get(this.passwordError)
    }
}