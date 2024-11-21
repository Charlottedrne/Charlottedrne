/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg': '#FFF6E8',
				'bleu': '#54D0EB',
				'jaune': '#FFA94D',
				'rose': '#E33562',
				'marron': '#624131',
			  },
			  fontFamily: {
				Dama: ['damascus', 'sans-serif'],
				Fredo: ['Fredoka'],
			  },
			  fontSize: {
				'10xl': '22rem',
			  }

		},
	},
	plugins: [],
}
