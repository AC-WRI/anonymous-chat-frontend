import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: [
          'var(--font-overused-grotesk)',
          'Overused-Grotesk',
          ...fontFamily.sans,
        ],
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.375rem' }],
        lg: ['1.125rem', { lineHeight: '1.5rem' }],
        '100': ['6.25rem', { lineHeight: '5rem', letterSpacing: '-0.1875rem' }], // 100px
      },
      borderWidth: {
        1.5: '1.5px',
      },
      colors: {
        primary: {
          400: '#005277',
        },
        secondary: {
          400: '#FF4E25',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
