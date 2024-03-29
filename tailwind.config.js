/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        paddingInline: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        pri: '#0076BE',
        icon: '#0076be',
        feature: '#f1f5f6',
        lightgray: '#8e9a9d',
        neutral: 'gray',
        hover: '#4E1CFF',
      },
    },
  },
  plugins: [],
};
