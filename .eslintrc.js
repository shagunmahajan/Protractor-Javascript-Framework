module.exports = {
	env: {
		browser: true,
		commonjs: true,
		node: true,
		jasmine: true,
	},
	extends: [
		"standard",
		"eslint:recommended",
		"plugin:protractor/recommended"
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: [
		'protractor',
	],
	rules: {
		"strict": "off",
		'indent': ["error", "tab", { "SwitchCase": 1 }],
		'no-var': "off",
		'no-tabs': "off",
		'protractor/no-shadowing': "off",
		'protractor/no-by-xpath': "off"
	}
};
