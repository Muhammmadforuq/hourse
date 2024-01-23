/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'open-sans':['Open Sans', 'sans-serif'],
        'marcellus':['Marcellus SC', 'sans-serif'],
        'montserrat':['Montserrat'],
      },
      maxWidth:{
        base:'1472px'
      },
      colors:{
        brand:{
          black:"#151415",
          lightBlack:"#404040"
          
        }
      }
    },
  },
  plugins: [],
}

