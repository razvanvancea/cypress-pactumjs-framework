/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage';
import LeftSideMenuPage from '../pages/LeftSideMenuPage';
import RegisterPage from '../pages/RegisterPage';

describe('User actions Test Suite', () => {
	beforeEach(() => {
		cy.visit('https://qa-practice.netlify.app');
	});

	it('user should be able to login - test', () => {
		LeftSideMenuPage.getFormsItem().click();
		LeftSideMenuPage.getLoginLink().click();

		LoginPage.getEmailField().type('admin@admin.com');
		LoginPage.getPasswordField().type('admin123');
		LoginPage.getSubmitBtn().click();
		LoginPage.getResponseMessage().should(
			'have.text',
			'admin@admin.com, you have successfully logged in!'
		);
	});

	it('user should not be able to login using wrong password', () => {
		LeftSideMenuPage.getFormsItem().click();
		LeftSideMenuPage.getLoginLink().click();

		LoginPage.getEmailField().type('admin@admin.com');
		LoginPage.getPasswordField().type('wrongpsw');
		LoginPage.getSubmitBtn().click();

		LoginPage.getSubmitBtn().click();
		cy
			.get('div.alert')
			.should(
				'have.text',
				"Bad credentials! Please try again! Make sure that you've registered."
			);
	});

	it('user should be able to register', () => {
		LeftSideMenuPage.getFormsItem().click();
		LeftSideMenuPage.getRegisterLink().click();

		RegisterPage.getFirstNameField().type('John');
		RegisterPage.getLastNameField().type('Wick');
		RegisterPage.getPhoneField().type('+40720333233');
		RegisterPage.getEmailField().type('marco.sparrow@gmail.com');
		RegisterPage.getPasswordField().type('supersecret');
		RegisterPage.getTermsAndConsCheckbox().click();

		RegisterPage.getSubmitRegisterBtn().click();
		RegisterPage.getResponseMessage().should(
			'have.text',
			'The account has been successfully created!'
		);
	});
});
