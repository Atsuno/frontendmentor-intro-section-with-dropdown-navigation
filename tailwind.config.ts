import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [daisyui],
  daisyui: {
    themes: [{
      mytheme: {
        primary: 'hsl(0, 0%, 8%)',
        secondary: 'hsl(0, 0%, 41%)',
        accent: 'hsl(0, 0%, 98%)',
        neutral: 'hsl(0, 0%, 98%)',
        'base-100': 'hsl(0, 0%, 98%)',
      },
    }],
    darkTheme: 'mytheme',
  },
}
export default config
