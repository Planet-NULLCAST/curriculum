// some of the classes used is being purged after build is done.
// solution: https://github.com/tailwindlabs/tailwindcss/issues/4009
const fg = require('fast-glob');
const purgeFiles = fg.sync(['./src/pages/**/*.jsx', './src/components/**/*.jsx'], { dot: false });

module.exports = {
	purge: purgeFiles,
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
				dark: "#0E181E"
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
