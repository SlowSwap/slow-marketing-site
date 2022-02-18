const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {

                'stone': colors.stone,
                sky: colors.sky,
                cyan: colors.cyan,
                'bright-pink': {
                    DEFAULT: '#EA33F7',
                    '50': '#FCE4FE',
                    '100': '#FAD0FD',
                    '200': '#F6A9FC',
                    '300': '#F282FA',
                    '400': '#EE5AF9',
                    '500': '#EA33F7',
                    '600': '#DA09E9',
                    '700': '#A707B3',
                    '800': '#75057D',
                    '900': '#420347'
                },
                'deep-blue': {
                    DEFAULT: '#2D3292',
                    '50': '#989BDF',
                    '100': '#888CDA',
                    '200': '#696ED1',
                    '300': '#4A50C7',
                    '400': '#373DB1',
                    '500': '#2D3292',
                    '600': '#202367',
                    '700': '#13153C',
                    '800': '#050611',
                    '900': '#000000'
                },
                'blue-purple': {
                    DEFAULT: '#3D3D95',
                    '50': '#ACACDD',
                    '100': '#9E9ED7',
                    '200': '#8181CB',
                    '300': '#6464C0',
                    '400': '#4949B2',
                    '500': '#3D3D95',
                    '600': '#2D2D6D',
                    '700': '#1C1C45',
                    '800': '#0C0C1E',
                    '900': '#000000'
                },

            },
        },
    },
    plugins: [

    ],
}
