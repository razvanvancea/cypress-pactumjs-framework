class LeftSideMenuPage {
	getFormsItem() {
		return cy.get('#forms');
	}

	getLoginLink() {
		return cy.get('a[href="login.html"]');
	}

	getRegisterLink() {
		return cy.get('a[href="register.html"]');
	}
}

export default new LeftSideMenuPage();
