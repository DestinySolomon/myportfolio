module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: "#1a1a1a",
          text: "#f5f0e8",
          amber: "#d4a853",
          yellow: "#e6c76a",
          chrome: "#2a2a2a",
          green: "#1e2d2a",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};
