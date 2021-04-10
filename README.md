# Protractor, Jasmine and Javascript Setup Guide
This is Test Automation framework designed using Protractor, Jasmine and Javascript

## Table of Contents

- [Features/Project Description](#features-project-description)
- [Framework Structure](#framework-structure)
- [Pre-requisites](#pre-requisites)
- [Setup Scripts](#setup-scripts)
- [How to write Test](#how-to-write-test)
- [How to run Test](#how-to-run-test)
- [Lint Automation Code](#lint-automation-code)
- [Troubleshooting](#troubleshooting)
- [How to Update local npm packages](#how-to-update-local-npm-packages)
- [Sample Test Results](#sample-test-results)

#### Features/Project Description:
* This automation framework is designed using Protractor and Jasmine.
* JavaScript is used as a programming language.
* Reporting is implemented using protractor-beautiful-reporter npm module. This generates the report in html and json. Also it captures the screenshots of the failed test cases.
* Test case scripts are in the `./spec` directory.
* Test data (e.g. customer data) are in `./testData` directory.
* Excel related functions are in `./testData` directory.
* Page functions and page elements are in `./page` directory. 

#### Framework Structure
```
├───base                           # This folder contains base functions like
├───pages                          # This folder contains page functions and page elements
├───reports                        # This folder contains test result (includes html report and screenshots)
│   └───reports-<date>
│       ├───screenshot             # This folder contains screenshot of the failed test steps 
│       └───report.html            # This file is the main html report file
├───spec                           # This folder contains test case files
├───testData                       # This folder contains test data
│   └───utility.js                 # This file contains functions related to excel 
│   ├───dataFile<Env>
└───config.js                      # This file contains framework configuration
```

## To Get Started

#### Pre-requisites
* Download and install Chrome or Firefox browser.
* Download and install Node.js:
  > [Install Node.JS](https://nodejs.org/en/download/ "Install Node.JS").
* Run `node -v` and make sure your node version is 6.x.x or greater.
* Run `java -version` and make sure you have Java Development Kit (JDK) installed. 
* Optional - Download and install any Text Editor like Visual Code/ Eclipse/ WebStorm/ IntelliJ.
  * [Install Visual Studio Code](https://code.visualstudio.com/download/ "Install Visual Studio Code").
  * [Install Eclipse](https://www.eclipse.org/downloads/packages/release/2021-03/r/eclipse-ide-enterprise-java-and-web-developers/ "Install Eclipse").

#### Setup Scripts 
* Clone the repository into a folder.
* Install Protractor: `npm install -g protractor` or `sudo npm install -g protractor`.
* Update necessary binaries of webdriver-manager: `webdriver-manager update` or  `sudo webdriver-manager update` or `npm install -g webdriver-manager`.
* Go to Project root directory and run `npm install` or `sudo npm install` to install the project dependencies from package.json.
* In a separate command line window, run `webdriver-manager start` and keep it running, if not using directConnect.

#### How to write Test
* Add new spec under spec folder.
* Name the file as <testCaseName>.js (e.g. bankManagerLoginSpec.js).
* Create a file under pages folder as <pageName>.js (e.g. login.js) to add functions and page elements.

#### How to Run Test
* `npm test` or `npm run test` - Run complete Test Suite.
* `npm test "--params.env demo"` - Run complete Test Suite on demo env.
* `npm test "--params.env demo" "--suite BankManager"` - Runs Bank Manager test suite on demo env. 
* `npm test "--suite BankManager"` - Runs Bank Manager test suite. 

#### Lint Automation Code
```
//lint your code
npm run verify
// fix the linting issues automatically
npm run format
```

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

#### Troubleshooting
* run `node -v` and make sure your node version is 14.15.4 or greater
* run `java -version` and make sure you have Java Development Kit (JDK) installed. 
* Make sure you have a local instance of Selenium Server started. If not, run `webdriver-manager start` if not using directConnect.
* run `webdriver-manager update` to make sure you have the latest Selenium webdrivers. 

#### Sample Test Results
![Protractor, Jasmine and Javascript Test Results](./testData/testReport.png?raw=true "Protractor, Jasmine and Javascript Test Results")
