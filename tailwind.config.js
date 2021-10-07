module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'sans' : ['Merriweather'],
        'script' : ['Dancing Script']
      },
      backgroundColor: {
        'chocolate' : '#B49453',
      },
      width : {
        'xl' : '900px'
      },
      height: {
        'xl' : '500px'
      },
      backgroundImage: {
        'landing-image' : "url('Images/LandingPage.png')",
        'pemberkatan-image' : "url('Images/Rectangle 8.png')",
        'protokol-image' : "url('Images/Flower Long.png')",
        'footer-image' : "url('Images/Rectangle 30.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
