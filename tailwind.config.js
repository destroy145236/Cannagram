/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {

          background: "#1C1C1C",
          sentMessage: "#5A96E9",
          receivedMessage: "#2A2A2A",
          primaryText: "#FFFFFF",
          secondaryText: "#A6A6A6",
          header: "#1F1F1F",
          selectedBubble: "#444B52",
          separator: "#2F2F2F",
          notification: "#E53935",
          online: "#4CAF50",
          link: "#5A96E9",
         

    },
    }
  },
  plugins: [
    import('tailwind-scrollbar'),
  ],
}

