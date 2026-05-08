/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F6F2EC',
        ink: '#1C1A18',
        paper: '#FBF8F3',
        red: '#ED1B34',
        stone: '#C8BBAA',
        mist: '#DDD7CE'
      }
    }
  },
  plugins: []
};
