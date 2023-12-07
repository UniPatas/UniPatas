/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "darker-purple": "#a110a9",
        "ligther-purple": "#d141e1",
        "pool-green": "#33b3a6",
        "lighter-green": "#a3ddd7",
        "yellow": "#ffc501",
        "brown": "#714329",
      },

      borderRadius: {
        custom1: "18% 82% 61% 39% / 32% 44% 56% 68%",
        custom2: "66% 34% 19% 81% / 76% 32% 68% 24%",
        custom3: "79% 21% 42% 58% / 22% 62% 38% 78%",
        custom4: "47% 53% 79% 21% / 46% 38% 62% 54%",
        custom5: "50px",
        custom6: "30px",
        custom7: "20px 20px 0px 0px",
        custom8: "0px 0px 20px 20px",
      },

      boxShadow: {
        box1: "0px 0px 24px 1600px rgba(0,0,0,0.2)",
      },

      spacing: {
      '400': 400,
    }},
  },
  plugins: [],
};
