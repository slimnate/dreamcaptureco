/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'burlywood': '#DEB887',
        'cream': '#f7edbb',
        'blonde': '#F7EDBB',
        'lightcoral': '#FF7477',
        'blackcoffee': '#3A2D32',
        'cafeaulait': '#A47963',
        'terracotta': '#ED6A5A',
        'goldfusion': '#7B7554',
        'orangesoda': '#F95738',
        'slategray': '#6B818C',
        'xanadu': '#7A918D',
        'steelblue': '#5B85AA',
        'ukranianblue': '#A3D9FF',
        'darkolivegreen': '#657153',
        'mediumchampagne': '#D8CD93',
        'polishedpine': '#549F93',
        'charcoal': '#2E4057',
        'jet': '#353535',
        'palatinepurple': '#4C1E4F',
        'lightpink': '#FFC3CD',
        'cottoncandy': '#FFC2E2',
        'mimipink': '#F5D0E4',
        'eggshell': '#F1F0DE',
        'palepurplepantone': '#F8E2EE',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}