/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./templates/**/*.twig', './src/**/*.{js,jsx,ts,tsx,vue,css,pcss}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: {
          'sans': ['panel-sans', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'button-1': "url('/assets/img/button-1.svg')",
                'button-2': "url('/assets/img/button-2.svg')",
                'button-3': "url('/assets/img/button-3.svg')"
            },
            fontSize: {
                'xl': ['25px', '45px'],
                '2xl': ['35px', '40px'],
                '3xl': ['45px', '65px'],
                '4xl': ['70px', '90px'],
                '5xl': ['90px', '110px']
            },
            colors:{
                'black' :'#1D1D1B',
                'yellow': '#EEE914',
                'pink': '#CF528C'
            }
        },
    },
    plugins: [],
}
