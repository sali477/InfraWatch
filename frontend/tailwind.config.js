// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0e21',
          800: '#111529',
          700: '#1a1f38',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
        },
        sky: {
          400: '#38bdf8',
        },
      },
    },
  },
  plugins: [],
};
