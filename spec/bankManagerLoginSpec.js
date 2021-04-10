var Login = require('../pages/login.js')
var Common = require('../pages/common.js')

var login = new Login()
var common = new Common()

describe('Verify Bank Manager login', function () {
	it('Launch the application', function () {
		common.launchApp()
	})

	it('Click on Bank Manager login button', function () {
		login.clickBankManagerLoginBtn()
	})

	it('Verify user is Bank Manager screen', function () {
		common.verifyScreenNavigation('manager')
	})
})
