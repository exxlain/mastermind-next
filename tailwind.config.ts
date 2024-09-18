import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-gold": "var(--bright-gold)",
        "muted-gold": "var(--muted-gold)",
        "dark-red": "var(--dark-red)",
        "bright-red": "var(--bright-red)",
        background: "var(----background)"
      },
      boxShadow: {
        'custom-shadow': "var(--shadow)",
      },
    },
  },
  plugins: [],
};
export default config;
