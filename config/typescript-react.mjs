import reactHooks from "eslint-plugin-react-hooks";

import typescriptBrowser from "./typescript-browser.mjs";

const ECMA_VERSION = 2020;

export default [
	...typescriptBrowser,
	{
		name: "eslint-config-infernal/react",
		plugins: { "react-hooks": reactHooks },
	},
];
