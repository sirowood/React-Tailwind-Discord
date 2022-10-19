const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		boxShadow: {
			sm: "rgba(4, 4, 5, 0.2) 0px 1px 0px 0px, rgba(6, 6, 7, 0.05) 0px 1.5px 0px 0px, rgba(4, 4, 5, 0.05) 0px 2px 0px 0px",
			md: "rgba(0, 0, 0, 0.16) 0px 4px 4px",
			lg: "rgba(0, 0, 0, 0.24) 0px 8px 16px",
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
					300: '#96989D',
					400: '#72767D',
					500: '#5C6067',
					550: '#4F545C',
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
