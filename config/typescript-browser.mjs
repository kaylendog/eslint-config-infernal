import globals from "globals";

import typescript from "./typescript.mjs";

export default [
	...typescript,
	{
		name: "eslint-config-infernal/browser",
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
];
