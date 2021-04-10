var xlsx = require('xlsx')

var Utility = function () {
	this.readExcelData = function () {
		var filepath = 'testData/data.xlsx'

		var workbook = xlsx.readFile(filepath)
		var worksheet = workbook.Sheets[workbook.SheetNames[0]]

		return xlsx.utils.sheet_to_json(worksheet)
	}
}
module.exports = Utility
