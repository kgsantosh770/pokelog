/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        pulse: {
          '0% 100%': { backgroundColor: 'hsl(200, 20%, 50%)' },
          '50%': { backgroundColor: 'hsl(200, 20%, 70%)' },
        },
      },
      animation: {
        skimmer: 'pulse 2s linear infinite',
      }
    }
  },
  plugins: [],
}
