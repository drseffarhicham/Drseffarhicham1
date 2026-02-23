/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        'clinic-green': {
          DEFAULT: '#009677',
          50: '#f0f9f7',
          100: '#e0f2ef',
          200: '#b3e0d8',
          300: '#80cdbe',
          400: '#4dbba4',
          500: '#009677',
          600: '#008a6d',
          700: '#007d63',
          800: '#007059',
          900: '#00644f',
        },
        'clinic-pink': {
          DEFAULT: '#f17e7eff',
          50: '#fdf5f5',
          100: '#ece8ffff',
          200: '#f6d5d5',
          300: '#f2bfbf',
          400: '#eda9aa',
          500: '#f07c7cff',
          600: '#e07474ff',
          700: '#c96666ff',
          800: '#b25858ff',
          900: '#954a4aff',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
