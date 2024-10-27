import nextCoreWebVitals from "next/core-web-vitals";

export default [
	...nextCoreWebVitals,
	...typescript,
	{
		name: "eslint-config-infernal/next",
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
];
