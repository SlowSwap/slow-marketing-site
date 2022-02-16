const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                colors: {
                    'stone': colors.stone,
                    sky: colors.sky,
                    cyan: colors.cyan,
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
