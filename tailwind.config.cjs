/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'secondary': '#84cc16',      // Main green color
				'secondary-dark': '#65a30d' // Darker green for hover effects
			}
		},
	},
	plugins: [],
}