module.exports = {
  content: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}', // Added common paths for JS/TS and Vue files
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
    },
  },
  plugins: [],
}
