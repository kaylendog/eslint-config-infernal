import globals from "globals";

import typescript from "./typescript.mjs";

export default [
	...typescript,
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
];
