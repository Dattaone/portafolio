/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				gunmetal: '#2D3142'
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}
