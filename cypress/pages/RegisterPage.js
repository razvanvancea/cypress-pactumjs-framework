class RegisterPage {
	getFirstNameField() {
		return cy.get('#firstName');
	}

	getLastNameField() {
		return cy.get('#lastName');
	}

	getPhoneField() {
		return cy.get('#phone');
	}

	getEmailField() {
		return cy.get('#emailAddress');
	}

	getPasswordField() {
		return cy.get('#password');
	}

	getTermsAndConsCheckbox() {
		return cy.get('input[type="checkbox"]');
	}

	getResponseMessage() {
		return cy.get('div.alert');
	}

	getSubmitRegisterBtn() {
		return cy.get('#registerBtn');
	}
}

export default new RegisterPage();
