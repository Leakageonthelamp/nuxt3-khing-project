/** @type {import("tailwindcss").Config} */

module.exports = {
  important: true,
  content: [
    'app.vue',
    'error.vue',
    './components/**/*.{js,vue,ts}',
    './features/**/*.{js,vue,ts}',
    './containers/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}',
    './error.{js,vue,ts}',
    './utils/**/*.{js,vue,ts}',
    './assets/**/*.{js,vue,ts,scss}',
  ],
  theme: {
    extend: {
      cursor: {
        'hover-work': 'url(/mouse-icon.svg), pointer',
        'hover-work-spin': 'url(/mouse-icon.gif), auto',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        display: ['Poppins', 'Prompt', 'sans-serif'],
        poppins: ['Poppins', 'Noto Sans Thai', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
        noto: ['Noto Sans Thai', 'Prompt', 'sans-serif'],
        mogent: ['Mogent', 'sans-serif'],
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        30: '30px',
        40: '40px',
      },
      colors: {
        black: '#20243E',
        white: '#FFFFFF',
        dark: {
          DEFAULT: '#0E0F52',
        },
        light: {
          DEFAULT: '#F4E6DB',
        },
        gray: {
          DEFAULT: '#9095A6',
          disabled: '#C1C4D0',
          border: '#E2E4EA',
          fill: '#F4F5FA',
        },
        primary: {
          DEFAULT: '#C397F9',
        },
        secondary: {
          DEFAULT: '#8C9A80',
        },
        totiw: {
          DEFAULT: '#D76739',
          blue: '#3C75E9',
          yellow: '#F2BB3E',
        },
        healthflow: {
          DEFAULT: '#00A991',
          secondary: '#4175A6',
        },
        hra: {
          DEFAULT: '#00A991',
          secondary: '#4175A6',
        },
        cnvr: {
          DEFAULT: '#D76739',
          secondary: '#F2BB3E',
        },
        info: {
          DEFAULT: '#F64976',
          50: '#FFEBF0',
          100: '#F87395',
        },
        danger: {
          DEFAULT: '#D0021B',
          50: '#ffe5e5',
          100: '#FF4C4C',
        },
        success: {
          DEFAULT: '#01B460',
          50: '#E2FFF0',
          100: '#52CB8C',
        },
        warning: {
          DEFAULT: '#EE7336',
          50: '#FFEBE2',
          100: '#FF864B',
        },
        'light-blue': {
          DEFAULT: '#E8EFFD',
          500: '#E8EFFD',
          700: '#3675FB',
        },
        'light-purple': {
          DEFAULT: '#F1E3FF',
          500: '#F1E3FF',
          700: '#C387FF',
        },
        'warm-egg': {
          DEFAULT: '#FFF6D8',
          500: '#FFF6D8',
          700: '#E1BF4F',
        },
        'light-lime': {
          DEFAULT: '#D5FBC7',
          500: '#D5FBC7',
          700: '#85C36F',
        },
        'light-sky': {
          DEFAULT: '#C7FBF8',
          500: '#C7FBF8',
          700: '#5EBAB5',
        },
        'violet-pastel': {
          DEFAULT: '#C7C9FB',
          500: '#C7C9FB',
          700: '#878AD5',
        },
        'old-rose': {
          DEFAULT: '#FFC6C6',
          500: '#FFC6C6',
          700: '#D17676',
        },
        'pink-pastel': {
          DEFAULT: '#FBC7DA',
          500: '#FBC7DA',
          700: '#D5809F',
        },
        'brown-pastel': {
          DEFAULT: '#D2AFAF',
          500: '#D2AFAF',
          700: '#996D6D',
        },
        'gold-green': {
          DEFAULT: '#CCC499',
          500: '#CCC499',
          700: '#9F9458',
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/forms'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography'),
  ],
}
