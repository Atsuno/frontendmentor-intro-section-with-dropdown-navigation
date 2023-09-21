import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        alink: 'hsl(228, 45%, 44%)',
        primary: 'hsl(0, 0%, 98%)',
        secondary: 'hsl(0, 0%, 41%)',
        thirdary: 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [daisyui],
}
export default config
