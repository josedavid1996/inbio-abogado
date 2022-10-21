/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customText: '"Roboto", Helvetica, Arial, sans-serif'
      },
      colors: {
        blacktranparente: 'rgba(23,26,29,1) 40%',
        customtranparente: 'rgba(23,26,29,0) 100%)',
        gradResumen1: 'rgba(255,255,255,.1) 0%',
        gradResumen2: 'rgba(255,255,255,0) 100%)',

      },
      animation: {
        renderprogresbar: 'renderprogresbarframe 0.6s 1s linear forwards',
        renderimgabout: 'renderimgaboutframe 0.7s ',
        renderimgabanner: 'renderimgaboutframe 1.4s',
        renderaboutme: 'renderimgaboutframe 1s'

      },
      keyframes: {
        renderprogresbarframe: {
          '0%': {
            transform: "scale(0)"
          },
          '100%': {
            transform: "scale(1)"
          }
        }
        ,
        renderimgaboutframe: {
          '0%': {
            opacity: "0",
            transform: "translateY(200px)",
          },
          '70%': {
            opacity: "0",
            transform: "translateY(40px)",
          },
          '100%': {
            opacity: "1",
            transform: "translateY(0)",
          }
        },

      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
// const defaultTheme = require('tailwindcss/defaultTheme')
// const { themes } = require('./@tailwind/theme')

// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx}',
//     './src/components/**/*.{js,ts,jsx,tsx}'
//   ],
//   darkMode: 'class', // or 'media' or 'class'
//   important: true,
//   theme: {
//     extend: {
//       colors: { ...themes },
//       fontFamily: {
//         sans: `"DM Sans", ${defaultTheme.fontFamily.sans.join(',')}`,
//         mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(',')}`
//       },
//       spacing: {
//         13: '3.25rem',
//         15: '3.75rem',
//         18: '4.5rem',
//         22: '5.5rem',
//         26: '6.5rem',
//         30: '7.5rem',
//         50: '12.5rem',
//         90: '22.5rem'
//       },
//       extendedSpacing: {
//         // Fractional values
//         '1/2': '50%',
//         '1/3': '33.333333%',
//         '2/3': '66.666667%',
//         '1/4': '25%',
//         '2/4': '50%',
//         '3/4': '75%',
//         '9/10': '90%',

//         // Bigger values
//         100: '25rem',
//         120: '30rem',
//         128: '32rem',
//         140: '35rem',
//         160: '40rem',
//         180: '45rem',
//         192: '48rem',
//         200: '50rem',
//         240: '60rem',
//         256: '64rem',
//         280: '70rem',
//         320: '80rem',
//         360: '90rem',
//         400: '100rem',
//         480: '120rem'
//       },
//       height: (theme) => ({
//         ...theme('extendedSpacing')
//       }),
//       minHeight: (theme) => ({
//         ...theme('spacing'),
//         ...theme('extendedSpacing'),
//         screen: '100vh'
//       }),
//       maxHeight: (theme) => ({
//         ...theme('extendedSpacing'),
//         none: 'none',
//         screen: '100vh'
//       }),
//       width: (theme) => ({
//         ...theme('extendedSpacing')
//       }),
//       minWidth: (theme) => ({
//         ...theme('spacing'),
//         ...theme('extendedSpacing'),
//         screen: '100vw'
//       }),
//       maxWidth: (theme) => ({
//         ...theme('spacing'),
//         ...theme('extendedSpacing'),
//         screen: '100vw'
//       })
//     }
//   },
//   variants: {
//     extend: {}
//   },
//   plugins: [
//     require("daisyui"),
//     require('./@tailwind/plugins/icons'),
//     require('./@tailwind/plugins/titles'),
//     require('./@tailwind/plugins/buttons'),
//     require('./@tailwind/plugins/paragraphs'),
//   ]
// }
