var Common = function () {

	this.launchApp = function () {
		browser.get(browser.params.url)
	}

	this.verifyScreenNavigation = function (expExtendedUrl) {
		browser.getCurrentUrl().then(function (text) {
			var mainUrl = text.split('#')
			expect(text).toEqual(mainUrl[0] + '#/' + expExtendedUrl)
		})
	}

	this.switchToAlert = function () {
		browser.switchTo().alert()
	}

	this.acceptAlert = function () {
		var alert = browser.switchTo().alert()
		alert.accept()
	}

	this.verifyTextOnAlert = function (textToBeVerified) {
		var alert = browser.switchTo().alert()
		alert.getText().then(function (text) {
			expect(text).toContain(textToBeVerified)
		})
	}
}

module.exports = Common
