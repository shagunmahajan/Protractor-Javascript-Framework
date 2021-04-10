var Base = function () {
	var EC = protractor.ExpectedConditions
	var moment = require('moment')

	this.waitUntil = function (element, visibility) {
		visibility = visibility.toLowerCase()
		if (visibility === 'visible') {
			browser.wait(EC.visibilityOf(element), 3000, 'Unable to wait for ' + element.locator() + ' to be visible')
		} else if (visibility === 'invisible') {
			browser.wait(EC.invisibilityOf(element), 3000, 'Unable to wait for ' + element.locator() + ' to be invisible')
		} else if (visibility === 'clickable') {
			browser.wait(EC.elementToBeClickable(element), 3000, 'Unable to wait for ' + element.locator() + ' to be clickable')
		} else if (visibility === 'present') {
			browser.wait(EC.presenceOf(element), 3000, 'Unable to wait for ' + element.locator() + ' to be present')
		}
	}

	this.sendKeysWithJavascript = function (element, input) {
		browser.executeScript("arguments[0].setAttribute('value', '" + input + "')", element.getWebElement())
	}

	this.sendKeys = function (element, input) {
		this.waitUntil(element, 'visible')
		element.clear()
		element.sendKeys(input)
	}

	this.clickWithMouse = function (element) {
		this.waitUntil(element, 'clickable')
		browser.actions().click(element).perform()
	}

	this.clickWithJavascript = function (element) {
		this.waitUntil(element, 'clickable')
		browser.executeScript('arguments[0].click();', element.getWebElement())
	}

	this.click = function (element) {
		this.waitUntil(element, 'clickable')
		element.click()
	}

	this.getElementText = function (element) {
		this.waitUntil(element, 'present')
		return element.getText().then(function (text) {
			return text
		})
	}

	this.setDateFormat = function (date, dateFormat) {
		var getDate = new Date(date)
		return moment(getDate).format(dateFormat)
	}
}
module.exports = Base
