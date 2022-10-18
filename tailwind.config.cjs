const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Whitney', 'Open Sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				gray: {
					50: '#ECEDEE',
					100: '#DCDDDE',
					200: '#B9BBBE',
					300: '#96989D',
					400: '#72767D',
					500: '#5C6067',
					600: '#464950',
					700: '#36393F',
					800: '#2F3136',
					900: '#202225',
				},
			},
		},
	},
	plugins: [],
};
