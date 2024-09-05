/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
	},
	plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	const colors = theme("colors");
	const newVars = {};

	// Flatten the color object and convert each color to a CSS variable
	for (const [colorName, colorValue] of Object.entries(colors)) {
		if (typeof colorValue === "string") {
			newVars[`--${colorName}`] = colorValue;
		} else {
			for (const [shade, value] of Object.entries(colorValue)) {
				newVars[`--${colorName}-${shade}`] = value;
			}
		}
	}

	addBase({
		":root": newVars,
	});
}
