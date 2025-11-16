    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        // Add other paths as needed
      ],
      presets: [require("nativewind/preset")],
      theme: {
        extend: {},
      },
      plugins: [],
    };