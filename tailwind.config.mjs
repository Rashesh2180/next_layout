/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#20212D",
        secodary:"#333455",
        secodaryS1:"#7173BB",
        lightgray:"#F4F2FB",
        skylight:"#F3F8FD",
        regulartxt:"#FEFEFF",
        bordercolor:"#5757571A"
      },
      screens:{
        tab:"1025px"
      }
    },
  },
  plugins: [],
};
