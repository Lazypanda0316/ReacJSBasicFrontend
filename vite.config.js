import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            archivo: ["Archivo", "sans-serif"],
          },
          animation: {
            slide: "slide 10s linear infinite",
          },
          keyframes: {
            slide: {
              "0%": { transform: "translateX(0%)" },
              "100%": { transform: "translateX(-50%)" },
            },
          },
        },
      },
    }),
  ],
});
