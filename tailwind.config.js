module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'sans' : ['Merriweather'],
        'sansLight' : ['Merriweather-Light'],
        'script' : ['Dancing Script']
      },
      backgroundColor: {
        'chocolate' : '#B49453',
      },
      width : {
        'xl' : '900px',
        'cardW' : '400px',
        'groom' : '1030px',
        'location' : '639px',
        'cardP' : '360px'
      },
      height: {
        'xl' : '500px',
        'cardH' : '450px',
        'hero' : '686px',
        'groom' : '198px',
        'location' : '418px'
      },
      backgroundImage: {
        'landing-image' : "url('Images/LandingPage.png')",
        'pemberkatan-image' : "url('Images/Rectangle 8.png')",
        'protokol-image' : "url('Images/Prokes.png')",
        'footer-image' : "url('Images/Rectangle 30.png')",
        'card1-image' : "url('Images/WishesCard 1.png')",
        'card2-image' : "url('Images/WishesCard 2.png')",
        'card3-image' : "url('Images/WishesCard 3.png')",
        'card4-image' : "url('Images/WishesCard 4.png')",
        'quotes-image' : "url('Images/quotesBack.png')"
      }
    },
  },
  variants: {
    extend: {
      PointerEvent: ['focus','hover']
    },
  },
  plugins: [],
}
