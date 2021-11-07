module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#2F2CBA",
        warnaborder:"#BFBFD6",
        warnarow:"#F5F4FC",
        second:"#7878A7",
        "#D6D6D6":"#D6D6D6",
        mata:"#A6A6A6",
        hijaumuda:"#C2F6CC",
        abuabu: "#E5E5E5",
        "#727286":"#727286"
      },
      fontFamily:{
        'sans' : ['Merriweather'],
        'script' : ['Dancing Script'],
        poppins:["Poppins"],
        monserat:["Montserrat"]
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
      },
      maxWidth: {
        kecil: '30px',
        sedang: '100px',
        besar: '170px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
