module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				'90': '90px',
				'75': '75px',
				'64': '64px',
				'44': '44px',
				'18': '18px',
			},
			colors: {
				yellow: {
					'01': '#FDB500',
				},
				gray: {
					'01': '#0B2A2B'
				}
			},
			fontFamily:{
				'darker': ['Darker Grotesque', 'Open Sans', 'sans-serif']
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
