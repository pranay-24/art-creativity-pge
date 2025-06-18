/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#3f8dc7',
        success: '#68bc52',
        accent: '#ff7e9A',
        greenCta :'#20ab5d'
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(63, 141, 199, 0.9) 0%, rgba(104, 188, 82, 0.8) 50%, rgba(255, 126, 154, 0.9) 100%)",
      }
    },
  },
  plugins: [],
};