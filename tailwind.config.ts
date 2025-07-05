import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        grayRating: '#CCCCCC',
        yellowRating: '#ffcf32',
      },
      spacing: {
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },
      aspectRatio: {
        '7/1': '7 / 1',
        '7/2': '7 / 2',
        '7/3': '7 / 3',
        '7/4': '7 / 4',
        '7/5': '7 / 5',
        '7/6': '7 / 6',
        '6/8': '6 / 8',
      },
    },
    backgroundImage: {
      'gradient-custom':
        'linear-gradient(180deg, #F7DB90 0%, #F49E00 400px, #F8FAFC 400px, #F8FAFC 100%)',
    },
  },
  plugins: [],
} satisfies Config
