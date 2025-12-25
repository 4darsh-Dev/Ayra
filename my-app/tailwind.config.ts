import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'neural-blue': '#0A84FF',
        'deep-space': '#0D0D0F',
        'midnight-slate': '#1A1B23',
        
        // Secondary Colors
        'electric-violet': '#8B5CF6',
        'cyber-teal': '#14B8A6',
        'warm-amber': '#F59E0B',
        
        // Semantic Colors
        'success-green': '#10B981',
        'warning-orange': '#F97316',
        'error-red': '#EF4444',
        'info-blue': '#3B82F6',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        sora: ['var(--font-sora)'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A84FF 0%, #8B5CF6 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
