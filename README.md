# eslint-config-infernal

A personal ESLint config for my projects.

## Quick Start

Install the package, along with its peers:

```sh
$ npm install --save-dev eslint eslint-config-infernal
```

Create the ESLint config file in your project root, specifying either your project's
`tsconfig.json`, or the `tsconfig.json` files of your packages:

```js
import infernal from "eslint-config-infernal";

export default [
	...infernal,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];
```

## Variants

This configuration offers a number of variants for different situations:

- `infernal` - The default variant, for use in a serverside TypeScript project.
- `infernal/browser` - For use in the browser.
- `infernal/react` - For use in a plain React project.
- `infernal/next` - For use with the [Next.js](https://nextjs.org/) framework.
- `infernal/ecmascript` - For use with plain JavaScript without types.

## Rules

I have written the configs in a way such that all immediately fixable rules are enabled as warnings,
and others are generally enabled as errors. There is no particular reason for the set of rules I
have chosen, other than that I like them.

Here's a brief overview of the rules:

### ECMAScript

- `eslint:recommended` - The recommended ESLint ruleset.

### TypeScript

- `infernal/ecmascript` - The above ECMAScript rules.
- `@typescript-eslint/recommended` - The recommended TypeScript ESLint ruleset.
- `@typescript-eslint/recommended-type-checked` - The recommended TypeScript ESLint ruleset, with
  rules that require type information enabled.
- `@typescript-eslint/strict` - The strict TypeScript ESLint ruleset.
- `@typescript-eslint/strict-type-checked` - The strict TypeScript ESLint ruleset, with rules that
  require type information enabled.

### Next.js

- `infernal/browser` - The TypeScript rules, with browser-specific rules enabled.
- `eslint-config-next` - The recommended Next.js ESLint ruleset.

## Formatting

This config is intended to be used in conjunction with [Prettier](https://prettier.io/). You can
find my Prettier config [here](https://github.com/kaylendog/prettier-config-infernal).

I have disabled the majority of formatting rules, since it's preferable to use a formatter over
ESLint for this purpose. I have enabled a few rules that I find useful, but these are not intended
to be exhaustive. Check out
[this article](https://typescript-eslint.io/linting/troubleshooting/formatting) by the TypeScript
ESLint team for more information.

## License

This project is licensed under the MIT License - see the
[LICENSE-MIT](https://github.com/kaylendog/eslint-config-infernal/blob/main/LICENSE-MIT) file for
details.
