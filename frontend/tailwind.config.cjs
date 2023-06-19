/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily:{
			sans: ["Raleway", "sans-serif" ],
			serif: ["Playfair", "serif"],
		},
		colors: {
			darkBlue: '#161D27',
			whiteBlue: '#E8F1F2',
			accentGreen: '#22FF00'
		}
	},
	plugins: [],
}
