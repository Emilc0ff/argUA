import { RegistrationPage } from '../support/Pages/registrationPage'

describe('Should create an account', () => {
  const registrationPage = new RegistrationPage
  const randomNumber = Math.floor(Math.random() * 9999 )
  function randonName(num) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    let result = "";
      for (let i = 0; i < num; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
    return result;
  }
  


  it('Creating an account', () => {
    cy.visit('').wait(8000);
    cy.get('.close > span').click()
    cy.contains('Registrarse').click()
    registrationPage.getNameInput().should('have.attr','placeholder','Ingresar nombres'); // Placeholder asertion
    registrationPage.getNameInput().type(`${randonName(10)}`);
    registrationPage.getLastNameInput().should('have.attr','placeholder','Ingresar Apellidos'); // Placeholder asertion
    registrationPage.getLastNameInput().type(`${randonName(10)}`);
    registrationPage.getPhoneInput().should('have.attr','placeholder','Ingresar Teléfono'); // Placeholder asertion
    registrationPage.getPhoneInput().type('3624123123');
    registrationPage.getEmailInput().should('have.attr','placeholder','Ingresar correo electrónico'); // Placeholder asertion
    registrationPage.getEmailInput().type(`email${randomNumber}@gmail.com`);
    registrationPage.getEmailConfirmationInput().should('have.attr','placeholder','Confirmar correo electrónico'); // Placeholder asertion
    registrationPage.getEmailConfirmationInput().type(`email${randomNumber}@gmail.com`);
    registrationPage.getPasswordInput().should('have.attr','placeholder','Ingresar Contraseña'); // Placeholder asertion
    registrationPage.getPasswordInput().type('Abc@12345');
    registrationPage.getPasswordConfirmationInput().should('have.attr','placeholder','Confirmar contraseña'); // Placeholder asertion
    registrationPage.getPasswordConfirmationInput().type('Abc@12345');
    registrationPage.getCheckBox().should('be.checked'); // checkbox asertion
    registrationPage.clickRegisterButton();
    });

    it('Verified required fields', () => {
      cy.visit('').wait(8000);
      cy.get('.close > span').click();
      cy.contains('Registrarse').click();
      registrationPage.getNameInput().type(`${randonName(10)}`);
      registrationPage.getLastNameInput().type(`${randonName(10)}`);
      registrationPage.getEmailInput().type(`email${randomNumber}@gmail.com`);
      registrationPage.getEmailConfirmationInput().type(`email${randomNumber}@gmail.com`);
      registrationPage.getPasswordInput().type('Abc@12345');
      registrationPage.clickRegisterButton();
      registrationPage.getPasswordConfirmationError().should('have.text','Este campo es obligatorio.'); // Confirm passowrd error required field message
      registrationPage.getPasswordConfirmationInput().type('Abc@12345');
      registrationPage.getNameInput().clear();
      registrationPage.clickRegisterButton();
      registrationPage.getNameError().should('have.text','Este campo es obligatorio.'); // Name Error required field message
      registrationPage.getNameInput().type(`${randonName(10)}`);
      registrationPage.getLastNameInput().clear();
      registrationPage.clickRegisterButton();
      registrationPage.getLastNameError().should('have.text','Este campo es obligatorio.'); // Last name Error required field message
      registrationPage.getLastNameInput().type(`${randonName(10)}`);
      registrationPage.getEmailInput().clear();
      registrationPage.clickRegisterButton();
      registrationPage.getEmailError().should('have.text','Este campo es obligatorio.'); // email Error required field message
      registrationPage.getEmailInput().type(`email${randomNumber}@gmail.com`);
      registrationPage.getEmailConfirmationInput().clear();
      registrationPage.clickRegisterButton();
      registrationPage.getEmailConfirmationError().should('have.text','Este campo es obligatorio.'); // Confirm email Error required field message
    });

    it.only('Verified field characters', () => {
      cy.visit('').wait(8000);
      cy.get('.close > span').click();
      cy.contains('Registrarse').click()
      registrationPage.getNameInput().type('123').type('{enter}');
      registrationPage.getNameError().should('have.text','Por favor, ingrese un nombre válido.'); // Name Error required field message
      registrationPage.getLastNameInput().type('123').type('{enter}');
      registrationPage.getLastNameError().should('have.text','Por favor, ingrese un apellido válido.'); // Name Error required field message
      registrationPage.getEmailInput().type('eeee').type('{enter}')
      registrationPage.getEmailError().should('have.text','Por favor ingrese una dirección de correo electrónico válido.')

      
    });



})