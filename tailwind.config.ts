import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium brand colors
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c3d66",
        },
        accent: {
          500: "#06b6d4",
          600: "#0891b2",
        },
        // Dark mode palette
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-premium": "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(14, 165, 233, 0.1) 50%, rgba(6, 182, 212, 0.05) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "glow-slow": "glow 4s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
        "slide-up": "slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "fade-in": "fadeIn 0.8s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(15px)" },
        },
        glow: {
          "0%, 100%": {
            opacity: "0.5",
            boxShadow: "0 0 15px rgba(14, 165, 233, 0.4)",
          },
          "50%": { opacity: "1", boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(14, 165, 233, 0.3)",
        "glow-md": "0 0 25px rgba(14, 165, 233, 0.4)",
        "glow-lg": "0 0 40px rgba(6, 182, 212, 0.5)",
        "glow-xl": "0 0 60px rgba(14, 165, 233, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
