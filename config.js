var htmlReporter = require('protractor-beautiful-reporter')
var describeFailureReporter = require('protractor-stop-describe-on-failure')
var path = require('path')
var fs = require('fs-extra')
var downloadDir = path.resolve(__dirname, './downloads')
var reportsDir = './reports'
var currentDate = new Date()
var reportFolder = "reports-" + (currentDate.toLocaleDateString()).replace(/\//g, '-')
var zipReport = path.resolve(__dirname, './reports/testReport.zip')
var zipFolder = require('zip-folder')

exports.config = {
	allScriptsTimeout: 5000,
	getPageTimeout: 5000,
	framework: 'jasmine',
	jasmineNodeOpts: {
		defaultTimeoutInterval: 100000
	},
	params: {
		env: 'test',
		url: 'http://www.way2automation.com/angularjs-protractor/banking/#/login'
	},

	//seleniumAddress: 'http://localhost:4444/wd/hub',
	directConnect: true,

	capabilities: {
		'browserName': 'chrome',
		acceptInsecureCerts: true,
		'chromeOptions': {
			prefs: {
				download: {
					'prompt_for_download': false,
					'default_directory': downloadDir
				},
			},
			args: ["--no-sandbox", "--headless", "--disable-dev-shm-usage", "--window-size=1920,1080"],
		}
	},

	specs: [
		'./spec/customerLoginSpec.js',
		'./spec/bankManagerLoginSpec.js',
		'./spec/bankManagerAddCustomerSpec.js'

	],

	suites: {
		BankManager: [
			'./spec/bankManagerLoginSpec.js',
			'./spec/bankManagerAddCustomerSpec.js'
		]
	},

	onPrepare() {

		fs.emptyDir(reportsDir, function(err) {
			if (err != undefined) {
				console.error(err)
			}
		});

		jasmine.getEnv().addReporter(new htmlReporter({
			baseDirectory: 'reports',
			takeScreenShotsOnlyForFailedSpecs: true,
			takeScreenShotsForSkippedSpecs: true,
			docTitle: 'Automation Report',
			docName: 'report.html',
			jsonsSubfolder: 'jsons',
			screenshotsSubfolder: 'screenshots',
			pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {

				var validDescriptions = descriptions.map(function(description) {
					if (description.includes("TC")) {
						return description.substring(0, 5);
					} else {
						return description.replace('/', '@');
					}
				})
				return path.join(reportFolder, validDescriptions.join('-'))
			},
			//set deafult search settings
			clientDefaults: {
				searchSettings: {
					allselected: false,
					pending: false,
					withLog: false
				},
				//col settings
				columnSettings: {
					displayTime: false,
					displayBrowser: false,
					displaySessionId: false,
					displayOS: false,
					inlineScreenshots: false
				},
				//total duration of test execution
				showTotalDurationIn: "header",
				totalDurationFormat: "hms",
			},

		}).getJasmine2Reporter())

		jasmine.getEnv().addReporter(describeFailureReporter(jasmine.getEnv()))

		jasmine.getEnv().addReporter({

			suiteStarted: function() {
				browser.driver.manage().window().maximize()
				browser.ignoreSynchronization = true
			},
		})
	},

	onComplete() {

		browser.sleep(2000)

		//path of directory to be archived
		var source = path.join(reportsDir, reportFolder + "/")

		//archive reports
		zipFolder(source, zipReport, function(err) {
			if (err) {
				console.error('Error: ', err)
			}
		})
	}
};
