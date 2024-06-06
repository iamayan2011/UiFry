import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      fontFamily: {
        custom: ['ClashDisplay', 'sans-serif']
      },
      colors:{
        lightBackground: '#FFFFFF',
        lightText: '#000000',
        darkBackground: '#000000',
        darkText: '#FFFFFF',
        customOrange: {
          light: '#FF5555',
          dark: '#FF5555',
        },
        
      }
    },
  },
  plugins: [],
 
};
export default config;
