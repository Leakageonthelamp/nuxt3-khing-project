/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['app.vue', 'error.vue'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
