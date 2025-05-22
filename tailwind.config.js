/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary-blue': '#2B6CB0',
        'primary-teal': '#319795',
        'primary-coral': '#ED8936',
        
        // Secondary Colors
        'secondary-mint': '#9AE6B4',
        'secondary-lavender': '#B794F4',
        'secondary-peach': '#FBD38D',
        
        // Neutral Colors
        'neutral-light': '#F7FAFC',
        'neutral-mid': '#E2E8F0',
        'neutral-dark': '#2D3748',
        
        // Accent Colors
        'accent-gold': '#D69E2E',
        'accent-green': '#48BB78',
        'accent-red': '#F56565',
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'var(--font-open-sans)', 'sans-serif'],
        serif: ['var(--font-roboto-slab)', 'var(--font-merriweather)', 'serif'],
      },
      fontSize: {
        'base': '16px',
      },
    },
  },
  plugins: [],
} 