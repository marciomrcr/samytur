/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   cel: "576px",
    //   //@media (min-width: 576px)

    //   tablet: "992px",
    //   // => @media (min-width: 992px)
    // },
    extend: {
      backgroundImage: {
        "banner-hero": "url('/banner1.jpg')",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
