/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        petroleo: {
          DEFAULT: "#0f4c5c",   // Verde petróleo elegante
          light: "#176d7a",     // Variante clara
          dark: "#0a343f",      // Variante oscura
        },
      },
    },
  },
  plugins: [],
};
