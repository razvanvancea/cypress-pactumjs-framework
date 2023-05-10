class LoginPage {
	getEmailField() {
		return cy.get('#email');
	}

	getPasswordField() {
		return cy.get('#password');
	}

	getSubmitLoginBtn() {
		return cy.get('#submitLoginBtn');
	}

	getResponseMessage() {
		return cy.get('div.alert');
	}
}

export default new LoginPage();
