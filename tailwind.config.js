/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        "half-screen": "50vh",
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '' },
            "code::after": { content: '' }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
