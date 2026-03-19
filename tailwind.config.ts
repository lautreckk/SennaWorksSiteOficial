import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { fontFamily: { sans: ["Sora", "sans-serif"] }, colors: { bg: "#F6F4F0", fg: "#1C1C1C", accent: "#DD0C29", muted: "#969696" } } },
  plugins: [],
};
export default config;