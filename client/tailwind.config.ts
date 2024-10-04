import type {Config} from 'tailwindcss';
import Colors from './app/theme/Colors';
import Borders from './app/theme/Borders';
import Shadows from './app/theme/Shadows';
import Fonts from './app/theme/Fonts';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: '1232px',
          md: '850px',
        },
      },
      important: true,
      screens: {
        sm: '576px',
        // => @media (min-width: 576px) { ... }
        md: '768px',
        // => @media (min-width: 960px) { ... }
        lg: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        ...Colors,
      },
      boxShadow: {
        ...Shadows,
      },
      borderWidth: {
        ...Borders,
      },
      fontSize: {
        ...Fonts,
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
};
export default config;
