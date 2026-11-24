/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        navy: '#08142d', ink: '#16233f',
        blue: {
          DEFAULT: '#2955e8',
          50: '#eef3ff', 100: '#dbe6ff', 200: '#b8ceff',
          300: '#93b0ff', 400: '#6e91fa', 500: '#2955e8',
          600: '#2448ca', 700: '#1d3caf', 800: '#182f87', 900: '#132462'
        }
      },
      boxShadow: { soft: '0 12px 40px rgba(12,35,80,.08)' }
    }
  },
  plugins: []
};
