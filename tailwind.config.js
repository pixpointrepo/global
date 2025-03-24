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
    },
  },
  plugins: [],
});
