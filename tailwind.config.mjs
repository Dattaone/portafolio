/** @type {import('tailwindcss').Config} */
import {skills} from "./cv.json";
const width = (-98.5 * skills.length)/9

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				gunmetal: '#2D3142'
			},
			keyframes: {
				scroll: {
				  "0%": { transform: "translateX(0)" },
				  "100%": { transform: `translateX(${width}%)` },
				},
			},
			animation: {
				scroll: "scroll 20s linear infinite",
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}
