/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(214.3 31.8% 91.4%)",
        background: "white",
        foreground: "black",
        primary: {
          DEFAULT: "#0F172A",
          foreground: "white"
        }
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px"
      }
    }
  },
  plugins: []
}