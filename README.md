# eslint-config-infernal

A personal ESLint config for my projects.

## Rules

I have written the configs in a way such that all immediately fixable rules are enabled as warnings, and others are generally enabled as errors. There is no particular reason for the set of rules I have chosen, other than that I like them.

Here's a brief overview of the rules:

### ECMAScript

- `eslint:recommended` - The recommended ESLint ruleset.

### TypeScript

- `./ecmascript.js` - The above ECMAScript rules.
- `@typescript-eslint/strict` - The strict TypeScript ESLint ruleset.

## Formatting

This config is intended to be used in conjunction with [Prettier](https://prettier.io/). You can find my Prettier config [here](https://github.com/kaylendog/prettier-config-infernal).

I have disabled the majority of formatting rules, since it's preferable to use a formatter over ESLint for this purpose. I have enabled a few rules that I find useful, but these are not intended to be exhaustive. Check out [this article](https://typescript-eslint.io/linting/troubleshooting/formatting) by the TypeScript ESLint team for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
