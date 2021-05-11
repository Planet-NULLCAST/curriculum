module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				'90': '90px',
				'75': '75px',
				'44': '44px',
			},
			colors: {
				yellow: {
					'01': '#FDB500',
				}
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
