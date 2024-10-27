import reactHooks from "eslint-plugin-react-hooks";

import typescriptBrowser from "./typescript-browser.mjs";

const ECMA_VERSION = 2020;

export default [
	...typescriptBrowser,
	{
		plugins: { "react-hooks": reactHooks },
	},
];
