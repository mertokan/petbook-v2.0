import type {Config} from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          'blue-1': 'var(--blue-1)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        custom: {
          neutral: {
            0: 'rgb(253, 253, 253)',
            1: 'rgb(235, 238, 239)',
            2: 'rgb(204, 209, 210)',
            4: 'rgb(153, 162, 165)',
            6: 'rgb(153, 162, 165)',
            8: 'rgb(36, 43, 51)',
            10: 'rgb(0, 23, 31)',
          },
          primary: {
            0: 'rgb(0, 120, 205)',
            1: 'rgb(0, 82, 140)',
            2: 'rgb(0, 52, 89)',
            3: 'rgb(0, 42, 72)',
          },
          secondary: {
            0: 'rgb(252, 238, 213)',
            1: 'rgb(247, 219, 167)',
            2: 'rgb(241, 208, 146)',
            3: 'rgb(238, 199, 126)',
          },
          state: {
            red: 'rgb(255, 86, 79)',
            green: 'rgb(52, 199, 89)',
            orange: 'rgb(255, 145, 44)',
            blue: 'rgb(0, 167, 231)',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
