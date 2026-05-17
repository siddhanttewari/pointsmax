/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Bricolage Grotesque', 'DM Sans', 'sans-serif'],
      },
      colors: {
        surface: {
          0: '#09090b',
          1: '#111113',
          2: '#18181b',
          3: '#1f1f23',
        },
        accent: {
          green: '#4ade80',
          amber: '#fbbf24',
          red: '#f87171',
          blue: '#60a5fa',
          purple: '#a78bfa',
        },
        bank: {
          hdfc: '#1a237e',
          axis: '#880e4f',
          sbi: '#004d40',
          icici: '#b71c1c',
          idfc: '#1b5e20',
          amex: '#0d47a1',
        }
      }
    },
  },
  plugins: [],
}
