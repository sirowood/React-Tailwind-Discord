const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');

module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		boxShadow: {
			sm: 'rgba(4, 4, 5, 0.2) 0px 1px 0px 0px, rgba(6, 6, 7, 0.05) 0px 1.5px 0px 0px, rgba(4, 4, 5, 0.05) 0px 2px 0px 0px',
			md: 'rgba(0, 0, 0, 0.16) 0px 4px 4px',
			lg: 'rgba(0, 0, 0, 0.24) 0px 8px 16px',
		},
		extend: {
			fontFamily: {
				sans: ['Whitney', 'Open Sans', ...defaultTheme.fontFamily.sans],
				title: ['Ginto', 'Open Sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				brand: '#5865F2',
				gray: {
					50: '#ECEDEE',
					100: '#DCDDDE',
					200: '#B9BBBE',
					250: '#A3A6AA',
					300: '#8E9297',
					350: '#747F8D',
					400: '#72767D',
					500: '#5C6067',
					550: '#4F545C',
					600: '#464950',
					650: '#3C4046',
					700: '#36393F',
					800: '#2F3136',
					850: '#292B2F',
					900: '#202225',
					1000: '#18191C',
				},
				green: {
					550: '#3BA55D',
					600: '#2D7D46',
				},
			},
		},
	},
	plugins: [forms],
};
