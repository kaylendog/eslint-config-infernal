module.exports = {
	extends: [
		"./ecmascript.js",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/strict",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	rules: {
		// fixable - supported
		"@typescript-eslint/consistent-type-exports": "warn",
		"@typescript-eslint/consistent-type-imports": "warn",
		"@typescript-eslint/explicit-member-accessibility": [
			"warn",
			{
				accessibility: "no-public",
			},
		],
		"@typescript-eslint/member-delimiter-style": "off",
		"@typescript-eslint/method-signature-style": ["warn", "method"],
		"@typescript-eslint/no-confusing-void-expression": "warn",
		"@typescript-eslint/no-duplicate-type-constituents": "warn",
		"@typescript-eslint/no-implicit-any-catch": "warn",
		"@typescript-eslint/no-import-type-side-effects": "warn",
		"@typescript-eslint/no-unnecessary-qualifier": "warn",
		"@typescript-eslint/no-useless-empty-export": "warn",
		"@typescript-eslint/prefer-readonly": "warn",
		"@typescript-eslint/sort-type-constituents": "warn",
		"@typescript-eslint/strict-boolean-expressions": "warn",
		"@typescript-eslint/type-annotation-spacing": ["warn", {before: false, after: true}],
		// fixable - extension
		"no-return-await": "off",
		"@typescript-eslint/return-await": ["error", "in-try-catch"],
		// not fixable - supported
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/member-ordering": [
			"error",
			{
				default: [
					"signature",
					"call-signature",
					// static fields
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"#private-static-field",
					// static methods
					"public-static-method",
					"static-method",
					"protected-static-method",
					"private-static-method",
					"#private-static-method",
					// constructors
					"public-constructor",
					"protected-constructor",
					"private-constructor",
					"constructor",
					// fields
					"abstract-field",
					"instance-field",
					"field",
					// methods
					"public-instance-method",
					"method",
					"protected-instance-method",
					"private-instance-method",
					"#private-instance-method",
				],
			},
		],
		camelcase: "off",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "default",
				format: ["camelCase"],
			},

			{
				selector: "variable",
				format: ["camelCase", "UPPER_CASE", "PascalCase"],
			},
			{
				selector: "parameter",
				format: ["camelCase"],
				leadingUnderscore: "allow",
			},

			{
				selector: "memberLike",
				modifiers: ["private"],
				format: ["camelCase"],
			},

			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
		],
		"@typescript-eslint/no-redundant-type-constituents": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-type-alias": [
			"error",
			{
				allowAliases: "in-unions-and-intersections",
				allowCallbacks: "always",
				allowConditionalTypes: "always",
				allowConstructors: "never",
				allowLiterals: "in-unions-and-intersections",
				allowMappedTypes: "always",
				allowTupleTypes: "in-unions-and-intersections",
				allowGenerics: "never",
			},
		],
		"@typescript-eslint/parameter-properties": [
			"error",
			{
				allow: ["readonly", "private", "protected"],
				prefer: "parameter-property",
			},
		],
		// TODO: doesn't behave with regular functions
		// "@typescript-eslint/prefer-readonly-parameter-types": [
		// 	"error",
		// 	{
		// 		checkParameterProperties: true,
		// 		treatMethodsAsReadonly: true,
		// 	},
		// ],
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		// disabled in favour of compiler definitions - see https://typescript-eslint.io/rules/typedef/
		"@typescript-eslint/typedef": "off",
		// not fixable - extension
		"default-param-last": "off",
		"@typescript-eslint/default-param-last": "error",
		"init-declarations": "off",
		"@typescript-eslint/init-declarations": "error",
		"no-dupe-class-members": "off",
		"@typescript-eslint/no-dupe-class-members": "error",
		"no-invalid-this": "off",
		"@typescript-eslint/no-invalid-this": "error",
		"no-loop-func": "off",
		"@typescript-eslint/no-loop-func": "error",
		"no-magic-numbers": "off",
		"@typescript-eslint/no-magic-numbers": [
			"error",
			{
				ignore: Array.from({length: 100}).map((_, i) => i - 50),
				ignoreArrayIndexes: true,
				ignoreDefaultValues: true,
				detectObjects: true,
				enforceConst: true,
				ignoreEnums: true,
				ignoreNumericLiteralTypes: true,
				ignoreTypeIndexes: true,
			},
		],
		"no-redeclare": "off",
		"@typescript-eslint/no-redeclare": "error",
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": "error",
		"no-unused-expressions": "off",
		"@typescript-eslint/no-unused-expressions": "warn",
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": "error",
	},
};
