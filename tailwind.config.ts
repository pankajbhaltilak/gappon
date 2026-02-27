import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './sections/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ebony: '#111111',
        pearl: '#f8f8f6',
        stone: '#c2b7a2',
        slatewarm: '#2a2a2a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        luxe: '0 12px 30px -12px rgba(0, 0, 0, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
