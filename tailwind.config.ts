import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pulled from the Apashishta logo and letterhead.
        forest: {
          DEFAULT: '#0F2E22', // near-black green, used for dark panels
          deep: '#0A2019',
          soft: '#173F30',
        },
        brand: {
          DEFAULT: '#1F7A4C', // logo green
          dark: '#14603A',
          light: '#2E9A63',
        },
        leaf: '#8CC63F', // logo lime, the single bright accent
        steel: {
          DEFAULT: '#4A5A63', // galvanised metal grey-blue
          light: '#8C989E',
          faint: '#D6DBD8',
        },
        board: '#F1F3EF', // recycled board off-white
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-body)'],
      },
      fontSize: {
        // Type scale, roughly a 1.25 minor third off a 16px base.
        'display-xl': ['clamp(2.75rem, 6.5vw, 5.25rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.35rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        prose: '68ch',
        shell: '78rem',
      },
      borderRadius: {
        data: '3px', // data blocks stay near-square
      },
      keyframes: {
        'ledger-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'ledger-in': 'ledger-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
