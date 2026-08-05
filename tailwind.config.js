import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6E3',
        'warm-white': '#FAF3E0',
        sand: '#E8DFD0',
        terracotta: {
          DEFAULT: '#C75B39',
          light: '#E07B5B',
        },
        olive: {
          DEFAULT: '#5C6B4F',
          light: '#7A8B6A',
        },
        mustard: '#D4A843',
        brown: '#4A3728',
        'dark-brown': '#2C1F15',
        'off-white': '#F5EDE0',
        primary: '#C75B39',
        secondary: '#5C6B4F',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}