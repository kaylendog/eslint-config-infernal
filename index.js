// apply prettier rules after to override any conflicting rules
module.exports = {
	extends: ["./config/typescript.js", "prettier"],
	ignorePatterns: ["*.js"],
};
