/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts,jsx,tsx,vue}',
    './node_modules/flowbite-vue/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fdf8eb',
        'primary-0': '#f4951c',
        primary: '#ed861b',
        'secondary-0': '#e7771a',
        secondary: '#e16919',
      },
    },
    fontFamily: {
      sans: ['Montserrat'],
      mono: ['Space Mono'],
    },
  },
  plugins: [require('flowbite/plugin')],
}
