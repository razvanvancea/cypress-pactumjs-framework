class LoginPage {
	getEmailField() {
		return cy.get('#email');
	}

	getPasswordField() {
		return cy.get('#password');
	}

	getSubmitBtn() {
		return cy.get('#submitLoginBtn');
	}

	getResponseMessage() {
		return cy.get('div.alert');
	}
}

export default new LoginPage();
