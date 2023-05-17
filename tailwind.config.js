/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}",
    "./node_modules/flowbite-datepicker/js/.{js,ts}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'goias': {
        100: '#1C9434',
        200: '#E1C701',
        300: '#0C3C93',
        400: '#00766F',
        500: '#004F4B',
        600: '#00BAAF',
        700: '#ADE8E4'
      }
    },
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ]
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin',)
    
  ],
}

