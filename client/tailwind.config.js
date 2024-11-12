module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-purple': '#520172',
        'custom-blue': '#4205FA',
        'main-purple': '#25014E',
        
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.border-gradient': {
          background: 'linear-gradient(to right, #520172, #4205FA)',
          '-webkit-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          'mask-composite': 'exclude',
        },
      })
    }
  ],
}
