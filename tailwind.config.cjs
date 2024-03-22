const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#1B73E8',
			},
		},
	},
	plugins: [],
};
