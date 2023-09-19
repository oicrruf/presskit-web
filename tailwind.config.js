/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      grey: {
        DEFAULT: '#D9D9D9',
        medium: '#A8A8A8',
        dark: '#484848'
      },
      white: '#FFFFFF',
      black: {
        DEFAULT: '#000000',
        medium: '#111111'
      },
      green: '#64CFB6'
    },
    fontFamily: {
      main: ['Inter', 'Tahoma']
    },
    extend: {}
  },
  plugins: []
}
