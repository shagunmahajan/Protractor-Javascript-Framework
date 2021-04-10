var Login = require('../pages/login.js')
var Common = require('../pages/common.js')
var BankManager = require('../pages/bankManager.js')
var Utility = require('../testData/utility.js')

var login = new Login()
var common = new Common()
var bankManager = new BankManager()
var utility = new Utility()

describe('Verify Bank Manager is able to Add Customer', function () {
	var customerDetails = utility.readExcelData()

	customerDetails.forEach(function (data) {
		it('Launch the application', function () {
			common.launchApp()
		})

		it('Click on Bank Manager login button', function () {
			login.clickBankManagerLoginBtn()
		})

		it('Verify user is Bank Manager screen', function () {
			common.verifyScreenNavigation('manager')
		})

		it('Click on Add Customer button', function () {
			bankManager.clickAddCustomerBtn()
		})

		it('Add details of customer', function () {
			bankManager.enterFirstName(data.firstName)
			bankManager.enterLastName(data.lastName)
			bankManager.enterPostCode(data.postCode)
		})

		it('User Clicks on Add Customer submit Button', function () {
			bankManager.clickAddCustomerSubmitBtn()
		})

		it('Verify Customer is added successfully', function () {
			common.verifyTextOnAlert('Customer added successfully')
		})
	})
})
