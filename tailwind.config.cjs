/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'burly-wood': '#DEB887',
        'cream': '#f7edbb'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
