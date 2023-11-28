import flowbitePlugin from 'flowbite/plugin.js';
import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
  purge: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}', './app/**/*.html', './pages/**/*.html', './components/**/*.html', './src/**/*.html'],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './styles/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        fade: 'fadedownright 0.5s ease-out',
      },
      // animate fadedownright
      keyframes: {
        fadedownright: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(20px, -20px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },

      // animate fadeupright
      keyframes: {
        fadeupright: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(20px, 20px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        fadeupright: 'fadeupright 0.5s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors(), flowbitePlugin({})],
};
