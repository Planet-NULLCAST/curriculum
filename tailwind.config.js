module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				'90': '5.625rem',
				'75': '4.688rem',
				'64': '4rem',
				'60': '3.75rem',
				'50': '3.125rem',
				'44': '2.75rem',
				'40': '2.5rem',
				'34': '2.125rem',
				'32': '2rem',
				'25': '1.563rem',
				'18': '1.125rem',
			},
			colors: {
				yellow: {
					'01': '#FDB500',
				},
				gray: {
					'01': '#0B2A2B'
				},
				pink: "#F13E5D",
				yellowBg: "#F7DA5B",
				orange: "#FF590F",
			},
			fontFamily:{
				'darker': ['Darker Grotesque', 'Open Sans', 'sans-serif']
			},
			borderRadius: {
				'10': '10px',
			}
		}
	},
	variants: {
		extend: {
			opacity: ["disabled"]
		}
	},
	plugins: []
};
