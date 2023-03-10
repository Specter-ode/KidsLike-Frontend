/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#000000',
        'second-color': '#858598',
        'third-color': '#3E7ADC',
        'fourth-color': '#8EC63F',
        'fifth-color': '#A6ABB9',
        'line-color': '#E3E2E7',
        'error-color': '#FF4965',
        'accent-color': '#FFBC33',
        'accent-color-50opacity': 'rgba(255,187,51, 0.5)',
        'second-accent-color': '#FFE9A5',
        'bg-color': '#E5E5E5',
        'second-bg-color': '#F1F1F1',
        'third-bg-color': '#F6F7FB',
        'main-bg': '#FFFFFF',
        day: 'hsla(0, 0%, 100%, 0.5);',
        // 'main-color': 'rgb(230, 234, 255)',
        // 'main-bg': 'rgb(55, 61, 85)',
        // 'second-color': 'rgb(192, 194, 202)',
        // 'accent-color': 'rgba(0,0,50, 1)',
        // 'accent-color-50opacity': 'rgba(0,0,50, 0.5)',
      },
      boxShadow: {
        header: '0px 2px 4px rgba(0, 0, 0, 0.15)',
        base: '0px 2px 4px 1px rgba(0, 0, 0, 0.2)',
        hover: '0px 2px 12px 2px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        main: ['Montserrat'],
      },
      screens: {
        sMob: '480px',
        sTablet: '768px',
        sLaptop: '1280px',
        lessMob: { max: '480px' },
        lessTablet: { max: '767px' },
        lessLaptop: { max: '1267px' },
        onlyTablet: { min: '768px', max: '1279px' },
      },
      gridTemplateColumns: {
        award: 'repeat(auto-fill, minmax(100px, 1fr))',
        tablet: 'repeat(auto-fill, max(336px, 1fr))',
        laptop: 'repeat(auto-fit, max(288px, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    // plugin(function ({ addVariant }) {
    //   addVariant('focusnshown', 'input:not:focus:not:placeholder-shown:invalid');
    //   addVariant('hocus', ['&:hover', '&:focus']);
    //   addVariant('inverted-colors', '@media (inverted-colors: inverted)');
    // }),
  ],
};
