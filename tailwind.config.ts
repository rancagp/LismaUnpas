import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
        lisma: {
          DEFAULT: '#5E35B1',    // Ungu LISMA utama
          light: '#7E57C2',     // Ungu LISMA muda
          dark: '#4527A0',      // Ungu LISMA tua
          text: '#413E66',      // Warna teks navbar
          hover: '#5E35B1'      // Warna hover (ungu LISMA)
        },
      },
    },
  },
  plugins: [],
};

export default config;
