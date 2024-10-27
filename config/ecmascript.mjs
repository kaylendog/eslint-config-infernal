import eslint from "@eslint/js";
import globals from "globals";

const ECMA_VERSION = 2020;

export default [
	eslint.configs.recommended,
	{
		name: "eslint-config-infernal/ecmascript",
		languageOptions: {
			parserOptions: {
				ecmaVersion: ECMA_VERSION,
			},
			globals: {
				...globals.node,
			},
		},
		rules: {
			"no-constructor-return": "error",
			"no-duplicate-imports": "warn",
			"no-new-native-nonconstructor": "error",
			"no-promise-executor-return": "warn",
			"no-self-compare": "warn",
			"no-template-curly-in-string": "warn",
			"no-unmodified-loop-condition": "warn",
			"no-unreachable-loop": "warn",
			"no-unused-private-class-members": "warn",
			"no-use-before-define": "error",
			"require-atomic-updates": "warn",
			// suggestions
			"accessor-pairs": "error",
			"arrow-body-style": ["error", "as-needed"],
			"block-scoped-var": "error",
			camelcase: [
				"error",
				{
					properties: "always",
				},
			],
			complexity: ["error", 10],
			"consistent-return": "error",
			"consistent-this": "error",
			curly: ["error", "all"],
			"default-case": "error",
			"default-case-last": "error",
			"default-param-last": "error",
			"dot-notation": "error",
			eqeqeq: "error",
			"func-name-matching": "error",
			"func-names": ["error", "as-needed"],
			"func-style": ["error", "declaration", { allowArrowFunctions: true }],
			"grouped-accessor-pairs": "error",
			"init-declarations": ["error", "always"],
			"logical-assignment-operators": ["warn", "always", { enforceForIfStatements: true }],
			"max-classes-per-file": ["error", 1],
			"max-depth": ["warn", 4],
			"max-lines": ["warn", 500],
			"max-lines-per-function": ["warn", 100],
			"max-nested-callbacks": ["warn", 4],
			"max-params": ["warn", 4],
			// TODO: this is annoying
			"multiline-comment-style": ["warn", "starred-block"],
			"new-cap": "error",
			"no-alert": "error",
			"no-array-constructor": "error",
			"no-caller": "error",
			"no-case-declarations": "error",
			"no-confusing-arrow": "warn",
			"no-else-return": "warn",
			"no-empty": "warn",
			"no-empty-function": "warn",
			"no-empty-static-block": "error",
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-extra-label": "warn",
			"no-extra-semi": "error",
			"no-implicit-coercion": ["error", { boolean: false }],
			"no-implied-eval": "error",
			"no-inline-comments": "warn",
			"no-invalid-this": "error",
			"no-iterator": "error",
			"no-label-var": "warn",
			"no-lone-blocks": "warn",
			"no-lonely-if": "warn",
			"no-loop-func": "error",
			"no-magic-numbers": [
				"warn",
				{
					ignore: Array.from({ length: 201 }).map((_, i) => i - 100),
					ignoreArrayIndexes: true,
					ignoreDefaultValues: true,
					detectObjects: true,
					enforceConst: true,
				},
			],
			"no-mixed-operators": "warn",
			"no-negated-condition": "warn",
			"no-nested-ternary": "warn",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"no-octal-escape": "error",
			"no-proto": "error",
			"no-return-assign": "error",
			"no-return-await": "error",
			"no-script-url": "error",
			"no-sequences": "error",
			"no-shadow": "error",
			"no-throw-literal": "error",
			"no-undef-init": "error",
			"no-unneeded-ternary": "warn",
			"no-unused-expressions": "warn",
			"no-useless-call": "error",
			"no-useless-computed-key": "warn",
			"no-useless-concat": "warn",
			"no-useless-constructor": "warn",
			"no-useless-rename": "warn",
			"no-useless-return": "warn",
			"no-var": "error",
			"no-void": "error",
			"no-warning-comments": "warn",
			"no-with": "error",
			"object-shorthand": ["warn", "properties"],
			"operator-assignment": ["warn", "always"],
			"prefer-arrow-callback": "error",
			"prefer-const": "warn",
			"prefer-destructuring": [
				"warn",
				{
					array: false,
					object: true,
				},
			],
			"prefer-exponentiation-operator": "warn",
			"prefer-named-capture-group": "warn",
			"prefer-numeric-literals": "warn",
			"prefer-object-has-own": "error",
			"prefer-object-spread": "error",
			"prefer-regex-literals": "error",
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			"prefer-template": "warn",
			"quote-props": ["warn", "as-needed"],
			radix: ["warn", "as-needed"],
			"require-await": "warn",
			"require-unicode-regexp": "warn",
			"spaced-comment": ["warn", "always"],
			yoda: "warn",
			// layout and formatting

			"line-comment-position": ["warn", "above"],
			"lines-around-comment": [
				"warn",
				{
					beforeBlockComment: true,
					afterBlockComment: false,
					beforeLineComment: true,
					afterLineComment: false,
					allowBlockStart: true,
					allowBlockEnd: true,
					allowObjectStart: true,
					allowObjectEnd: true,
					allowArrayStart: true,
					allowArrayEnd: true,
					allowClassStart: true,
					allowClassEnd: true,
				},
			],
			"lines-between-class-members": ["warn", "always", { exceptAfterSingleLine: true }],
			"new-parens": "warn",
			"no-extra-parens": [
				"warn",
				"all",
				{
					nestedBinaryExpressions: false,
				},
			],
		},
	},
];
