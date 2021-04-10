var Login = require('../pages/login.js')
var Common = require('../pages/common.js')
var Customer = require('../pages/customer.js')

var login = new Login()
var common = new Common()
var customer = new Customer()

describe('Verify Customer login', function () {
	it('Launch the application', function () {
		common.launchApp()
	})

	it('Click on Customer login button', function () {
		login.clickCustomerLoginBtn()
	})

	it('Verify user is Customer screen', function () {
		common.verifyScreenNavigation('customer')
	})

	it('Select name on Customer screen', function () {
		customer.selectName('Harry Potter')
	})

	it('User Click on Login Button', function () {
		customer.clickLoginBtn()
	})

	it('Verify user is logged in', function () {
		common.verifyScreenNavigation('account')
	})
})
