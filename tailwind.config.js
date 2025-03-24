// tailwind.config.js
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    './src/**/*.{html,js,jsx}', // Your content files
    './node_modules/@material-tailwind/react/**/*.js', // Include Material Tailwind components
  ],
  theme: {
    extend: {
      colors: {
        main: '#3B82F6', //blue
        secondary: '#FFB90B', //amber
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // For Google Fonts
        // custom: ['CustomFont', 'sans-serif'], // For Local Fonts
      },
      screens: {
        custom1000px: "1000px",
        custom1100px: "1100px",
        custom1150px: "1150px",
        "2xl": "1536px",
        "1.5xl": "1440px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      maxWidth: {
        "8xl": "90rem", // 1440px
        "9xl": "100rem", // 1600px
        "10xl": "120rem", // 1920px
      },
    },
  },
  plugins: [],
});
