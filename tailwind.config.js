/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html,js}"],
  theme: {
    extend: {
      colors: {
        // Warm neutral base
        paper: {
          50:  "#faf9f7",
          100: "#f2f0eb",
          200: "#e4e0d8",
          300: "#ccc7bb",
        },
        ink: {
          DEFAULT: "#1e1c18",
          light:   "#4a4740",
          muted:   "#7a776e",
        },
        // Single accent — a muted slate-teal
        accent: {
          DEFAULT: "#3b5f72",
          light:   "#dbe8ef",
          hover:   "#2e4d5d",
        },
      },
      fontFamily: {
        sans: [
          "Libre Franklin",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        serif: [
          "Lora",
          "Georgia",
          "ui-serif",
          "serif",
        ],
      },
      fontSize: {
        // Slightly looser scale
        "2xs": ["0.7rem",  { lineHeight: "1.4" }],
        xs:    ["0.8rem",  { lineHeight: "1.5" }],
        sm:    ["0.9rem",  { lineHeight: "1.6" }],
        base:  ["1rem",    { lineHeight: "1.75" }],
        lg:    ["1.15rem", { lineHeight: "1.7"  }],
        xl:    ["1.3rem",  { lineHeight: "1.55" }],
        "2xl": ["1.6rem",  { lineHeight: "1.35" }],
        "3xl": ["2rem",    { lineHeight: "1.25" }],
        "4xl": ["2.5rem",  { lineHeight: "1.15" }],
      },
      maxWidth: {
        prose: "68ch",
        wide:  "90ch",
      },
      typography: (theme) => ({
        workshop: {
          css: {
            "--tw-prose-body":    theme("colors.ink.DEFAULT"),
            "--tw-prose-headings": theme("colors.ink.DEFAULT"),
            "--tw-prose-links":   theme("colors.accent.DEFAULT"),
            "--tw-prose-bullets": theme("colors.ink.muted"),
            "--tw-prose-hr":      theme("colors.paper.200"),
            maxWidth: "68ch",
            fontSize: "1rem",
            lineHeight: "1.75",
            "h2, h3, h4": {
              fontFamily: theme("fontFamily.serif").join(", "),
              fontWeight: "600",
            },
            a: {
              textDecorationThickness: "1px",
              textUnderlineOffset: "3px",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
