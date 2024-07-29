module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'natural-orange': '#FF9966',
        'organic-orange': '#FFA500',
        'off-white': '#FAF9F6',
        'off-white-dark': '#E8E6E3', // Darker shade for gradient start
        'organic-green': '#4A5D23',
        'sand': '#F4E1C1',
      },
      backgroundImage: {
        'dot-pattern': "radial-gradient(#FAF9F6 1px, transparent 1px)",
      },
      backgroundSize: {
        'dot-size': '20px 20px',
      },
    },
  },
  plugins: [],
}