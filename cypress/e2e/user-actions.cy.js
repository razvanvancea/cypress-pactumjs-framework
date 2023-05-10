/// <reference types="cypress" />

describe('User authentication Test Suite', () => {
	beforeEach(() => {
		cy.visit('https://qa-practice.netlify.app');
	});

	it('user should be able to login - test', () => {
		cy.get('#forms').click();
		cy.get('a[href="login.html"]').click();

		cy.get('#email').type('admin@admin.com');
		cy.get('#password').type('admin123');

		const expectedSuccessMessage =
			'admin@admin.com, you have successfully logged in!';

		cy.get('#submitLoginBtn').click();
		cy.get('div.alert').should('have.text', expectedSuccessMessage);
	});

	it('user should not be able to login using wrong password', () => {
		cy.get('#forms').click();
		cy.get('a[href="login.html"]').click();

		cy.get('#email').type('admin@admin.com');
		cy.get('#password').type('wrongpassword');

		const expectedSuccessMessage =
			"Bad credentials! Please try again! Make sure that you've registered.";

		cy.get('#submitLoginBtn').click();
		cy.get('div.alert').should('have.text', expectedSuccessMessage);
	});

	it('user should be able to register', () => {
		cy.get('#forms').click();
		cy.get('a[href="register.html"]').click();

		cy.get('#firstName').type('John');
		cy.get('#lastName').type('Wick');
		cy.get('#phone').type('+40720333233');
		cy.get('#emailAddress').type('marco.sparrow@gmail.com');
		cy.get('#password').type('supersecret');
		cy.get('input[type="checkbox"]').click();

		const expectedSuccessMessage = 'The account has been successfully created!';

		cy.get('#registerBtn').click();
		cy.get('div.alert').should('have.text', expectedSuccessMessage);
	});
});
