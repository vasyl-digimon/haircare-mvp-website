/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf9ec',
          100: '#f9efcc',
          200: '#f2dd95',
          300: '#eac85a',
          400: '#e3b530',
          500: '#D4AF37',
          600: '#b8860b',
          700: '#96690a',
          800: '#7a5210',
          900: '#654513',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5E27A 50%, #B8860B 100%)',
      },
    },
  },
  plugins: [],
};
