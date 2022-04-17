module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: "'Square Peg', cursive",
      },
    backgroundImage: {
      cake: "url('./images/cake.jpg')"
    },
    keyframes: {
        customAnimate: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(2rem)' },
        }
      },
    animation: {
        customAnimate: 'customAnimate 1s ease-in-out forwards',
      }
    },
  },
    plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
