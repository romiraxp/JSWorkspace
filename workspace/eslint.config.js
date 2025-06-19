//touch eslint.config.js;
// If your project does not specify "type":"module" in its package.json file, then eslint.config.js must be in CommonJS format, such as:

// eslint.config.js
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},

	{
		ignores: ["tests/*"],
		rules: {
			"no-console": "error",
		},
	},
]);
