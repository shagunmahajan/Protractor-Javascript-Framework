var Base = require('../base/base.js')

var Login = function () {
	var base = new Base()

	var homeBtn = element(by.buttonText('Home'))
	var customerLoginBtn = element(by.buttonText('Customer Login'))
	var bankManagerLoginBtn = element(by.buttonText('Bank Manager Login'))

	this.clickHomeBtn = function () {
		base.click(homeBtn)
	}

	this.clickCustomerLoginBtn = function () {
		base.click(customerLoginBtn)
		base.waitUntil(customerLoginBtn, 'invisible')
	}

	this.clickBankManagerLoginBtn = function () {
		base.click(bankManagerLoginBtn)
		base.waitUntil(bankManagerLoginBtn, 'invisible')
	}
}

module.exports = Login
