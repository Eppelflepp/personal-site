/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient1': '#43cea2',
        'gradient2': '#185a9d',
        'gradient3': '#4568dc',
        'gradient4': '#b06ab3',
        'gradient5': '#3a1c71',
        'gradient6': '#d76d77',
        'gradient7': '#ffaf7b',
      },
    },
  },
  plugins: [],
}

