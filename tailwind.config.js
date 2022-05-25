module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        scale:{
          '0%':{transform:'translateY(-100%) scaleY(0)'},
          '100%':{transform:'translateY(0) scaleY(1)'},
        }
      },
      animation:{
        'scale-anim':'scale 1s ease-in-out',
      },
      colors:{
        neon:{
          blue:'#16AAFC',
          pink:'#A709D0',
        },
      },
      fontFamily:{
        'sans':['Montserrat','sans-serif'],
      },
    },
  },
  plugins: [],
}
