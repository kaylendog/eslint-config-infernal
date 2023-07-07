const ECMA_VERSION = 2020;

module.exports = {
	extends: ["./typescript-browser.js"],
	overrides: [
		{
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: ECMA_VERSION,
			},
			plugins: ["@typescript-eslint", "react", "react-hooks"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:@typescript-eslint/strict",
			],
			files: ["*.tsx"],
		},
	],
};
