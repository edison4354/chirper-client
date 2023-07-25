/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            'hero-pattern': "url('https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png')",
        },
        width: {
            '11/20': '55%',
            '9/20': '45%',
        },
        fontSize: {
            'xxs':'10px'
        },
        minWidth: {
            '608': '608px',
        }
    },
  },
  plugins: [],
}

