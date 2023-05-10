import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('login', (email, password) => {
	LoginPage.getEmailField().type(email);
	LoginPage.getPasswordField().type(password);
	LoginPage.getSubmitLoginBtn().click();
});
