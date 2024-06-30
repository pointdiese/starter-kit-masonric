module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /grid-cols-+/,
      variants: ['sm','md','lg'],
    },
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
