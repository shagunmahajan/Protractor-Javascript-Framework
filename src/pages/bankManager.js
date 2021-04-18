var Base = require('../base/base.js')

var BankManager = function () {
	var base = new Base()

	var addCustomerBtn = element(by.partialButtonText('Add Customer'))
	var openAccountBtn = element(by.buttonText('Open Account'))
	var customersBtn = element(by.partialButtonText('Customers'))
	var firstNameTxt = element(by.model('fName'))
	var lastNameTxt = element(by.model('lName'))
	var postCodeTxt = element(by.model('postCd'))
	var addCustomerSubmitBtn = element(by.xpath("//*[@name='myForm']//button[text()='Add Customer']"))

	this.clickAddCustomerBtn = function () {
		base.click(addCustomerBtn)
	}

	this.clickOpenAccountBtn = function () {
		base.click(openAccountBtn)
	}

	this.clickCustomersBtn = function () {
		base.click(customersBtn)
	}

	this.enterFirstName = function (firstName) {
		base.sendKeys(firstNameTxt, firstName)
	}

	this.enterLastName = function (lastName) {
		base.sendKeys(lastNameTxt, lastName)
	}

	this.enterPostCode = function (postalCode) {
		base.sendKeys(postCodeTxt, postalCode)
	}

	this.clickAddCustomerSubmitBtn = function () {
		base.click(addCustomerSubmitBtn)
	}
}

module.exports = BankManager
