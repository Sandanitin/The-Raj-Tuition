/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          dark: 'var(--secondary-dark)'
        },
        text: {
          dark: 'var(--text-dark)',
          light: 'var(--text-light)'
        },
        background: {
          light: 'var(--background-light)',
          dark: 'var(--background-dark)'
        },
        // Ensure indigo and blue colors are properly defined
        indigo: {
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        blue: {
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Alias for backward compatibility
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
        'background-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px'
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [
    // These plugins are now imported in postcss.config.js
  ],
}