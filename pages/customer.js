var Base = require('../base/base.js')

var Customer = function() {
	var base = new Base()

	var nameDd = element(by.id('userSelect'))
	var nameDdl = element.all(by.tagName('option'))
	var loginBtn = element(by.buttonText('Login'))

	this.selectName = function(name) {
		var getIndex
		base.waitUntil(nameDd, 'visible')
		nameDd.click()
		base.waitUntil(nameDdl.first(), 'visible')
		nameDdl.each(function(ele, index) {
			ele.getText().then(function(text) {
				if (text.toUpperCase() === name.toUpperCase()) {
					getIndex = index
					return getIndex
				}
			})
		}).then(function() {
			nameDdl.get(getIndex).click()
		})
	}

	this.clickLoginBtn = function() {
		base.click(loginBtn)
		base.waitUntil(loginBtn, 'invisible')
	}
}

module.exports = Customer
