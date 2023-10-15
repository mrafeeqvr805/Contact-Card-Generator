/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      },
      colors: {
        primary:"#008000",
      },
      keyframes:{
        fallAway:
        {'0%': { transform: 'rotateZ(0deg)',top:0,opacity:1 },
        '25%': { transform: 'rotateZ(-15deg)' },
        '100%': { top:300, transform: 'rotateZ(-5deg)',opacity:0 },
        },
        shake:
        {'0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
        '100%': { transform: 'translateY(10px)' },
        },
      },
      animation:{
        shake: 'shake 0.3s linear 1',
        fall:'fallAway 1s linear 1'
      }
     },
     screens: {
      'xs': '493px',

      'sm': '640px',

      'md': '728px',

      'lg': '920px',

      'xl': '1280px',

      '2xl': '1536px'
      
    },
    
  },
  plugins: [],
}