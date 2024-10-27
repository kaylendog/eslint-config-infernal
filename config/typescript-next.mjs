import nextCoreWebVitals from "next/core-web-vitals";

export default [
	...nextCoreWebVitals,
	...typescript,
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
];
