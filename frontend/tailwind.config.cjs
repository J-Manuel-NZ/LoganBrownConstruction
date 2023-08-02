/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily:{
			sans: ["Raleway", "sans-serif" ],
			serif: ["Playfair", "serif"],
			numbers: ["Montserrat", "sans-serif"]
		},
		colors: {
			darkBlue: '#161D27',
			whiteBlue: '#E8F1F2',
			accentGreen: '#22FF00',
			whiteSmoke: '#f5f5f5',
			step2: '#232E3E',
			step3: '#314259',
			step4: '#465C7C',
			step5: '#56749E',
			step6: '#7094C8',
		},
		backgroundImage: {
			'hero_image' : "url('/public/assets/hero_img.png')"
		}
		
	},
	plugins: [],
}
