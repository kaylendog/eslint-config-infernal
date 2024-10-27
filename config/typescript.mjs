import tseslint from "typescript-eslint";

import ecmascript from "./ecmascript.mjs";

const TYPESCRIPT_IGNORES = ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"];

export default [
	...ecmascript,
	...tseslint.configs.strictTypeChecked.map((config) => ({
		...config,
		ignores: TYPESCRIPT_IGNORES,
	})),
	...tseslint.configs.stylisticTypeChecked.map((config) => ({
		...config,
		ignores: TYPESCRIPT_IGNORES,
	})),
	{
		// use overrides to allow the same rules to be applied to both .js and .ts files
		name: "eslint-config-infernal/typescript",
		ignores: TYPESCRIPT_IGNORES,
		rules: {
			// rules we need to disable
			"new-cap": "off",
			"no-void": "off",
			"no-undef": "off",
			"no-useless-constructor": "off",
			// fixable - supported
			"@typescript-eslint/consistent-type-exports": "warn",
			// prefer no-type-imports since prettier removes the "type" keyword from imports
			"@typescript-eslint/consistent-type-imports": ["warn", { prefer: "no-type-imports" }],
			"@typescript-eslint/explicit-member-accessibility": [
				"warn",
				{
					accessibility: "explicit",
					overrides: {
						constructors: "no-public",
						methods: "no-public",
					},
				},
			],
			"@typescript-eslint/member-delimiter-style": "off",
			"@typescript-eslint/method-signature-style": ["warn", "method"],
			"@typescript-eslint/no-confusing-void-expression": "warn",
			"@typescript-eslint/no-duplicate-type-constituents": "warn",
			"@typescript-eslint/no-import-type-side-effects": "warn",
			"@typescript-eslint/no-unnecessary-qualifier": "warn",
			"@typescript-eslint/no-useless-empty-export": "warn",
			"@typescript-eslint/prefer-readonly": "warn",
			"@typescript-eslint/sort-type-constituents": "warn",
			"@typescript-eslint/strict-boolean-expressions": "warn",
			// fixable - extension
			"no-return-await": "off",
			"@typescript-eslint/return-await": ["error", "in-try-catch"],
			// not fixable - supported
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/member-ordering": [
				"error",
				{
					default: [
						"signature",
						"call-signature",
						// static fields
						"public-static-field",
						"public-static-readonly-field",
						"protected-static-field",
						"protected-static-readonly-field",
						"private-static-field",
						"private-static-readonly-field",
						"#private-static-field",
						"#private-static-readonly-field",
						// static getters and setters
						"static-get",
						"static-set",
						// static methods
						"public-static-method",
						"protected-static-method",
						"private-static-method",
						"#private-static-method",
						// fields - abstract fields higher for visibility
						"abstract-field",
						"abstract-readonly-field",
						"public-instance-field",
						"public-instance-readonly-field",
						"protected-instance-field",
						"protected-instance-readonly-field",
						"private-instance-field",
						"private-instance-readonly-field",
						"#private-instance-field",
						"#private-instance-readonly-field",
						// constructors
						"public-constructor",
						"protected-constructor",
						"private-constructor",
						"constructor",
						// getters and setters
						"instance-get",
						"instance-set",
						// methods
						"public-instance-method",
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
					format: ["camelCase", "PascalCase"],
				},
				{
					selector: "variable",
					modifiers: ["const"],
					format: ["camelCase", "PascalCase", "UPPER_CASE"],
				},
				{
					selector: "parameter",
					// allow PascalCase - React does not like rendering components with camelCase names
					format: ["camelCase", "PascalCase"],
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
				{
					selector: "function",
					format: ["camelCase", "PascalCase"],
				},
				{
					selector: "enumMember",
					format: ["PascalCase"],
				},
			],
			"@typescript-eslint/no-redundant-type-constituents": "error",
			"@typescript-eslint/no-require-imports": "error",
			"@typescript-eslint/no-type-alias": [
				"error",
				{
					allowAliases: "always",
					allowCallbacks: "always",
					allowConditionalTypes: "always",
					allowConstructors: "never",
					allowLiterals: "in-unions-and-intersections",
					allowMappedTypes: "always",
					allowTupleTypes: "in-unions-and-intersections",
					allowGenerics: "always",
				},
			],
			"@typescript-eslint/parameter-properties": [
				"error",
				{
					allow: ["readonly", "private", "protected"],
					prefer: "parameter-property",
				},
			],
			// TODO: disabled for now - has some inference issues
			"@typescript-eslint/prefer-readonly-parameter-types": "off",
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
					// allow -100 to 100 since these are common
					ignore: Array.from({ length: 201 }).map((_, i) => i - 100),
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
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "error",
		},
	},
];
