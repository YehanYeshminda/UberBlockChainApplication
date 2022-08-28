module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				sm: '360px',
				// => @media (min-width: 640px) { ... }
			},
			fontSize: {
				25: '1.5625rem',
				45: '2.813rem',
				17: '1.063rem',
			},
			height: {
				500: '31.25rem',
				500: '31.25rem',
			},
			width: {
				550: '550px',
			},
		},
	},
	plugins: [],
};
