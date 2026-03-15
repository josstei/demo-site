/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: '#89CFF0',
          pink: '#FFB7CE',
          green: '#98FB98',
          yellow: '#FDFD96',
          purple: '#C3B1E1',
          bg: '#FFF8F0',
          text: '#4A4A4A',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
