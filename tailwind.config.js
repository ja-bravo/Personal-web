const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class']
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          DEFAULT: '#3E82FC',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#D5E4FE',
          300: '#A2C3FE',
          400: '#70A3FD',
          500: '#3E82FC',
          600: '#0C61FB',
          700: '#034DD1',
          800: '#023A9F',
          900: '#02286C',
        },
      },
    },
  },
  variants: {
    extend: {
      padding: ['important'],
      backgroundColor: ['important'],
      accessibility: ['important'],
      alignContent: ['important'],
      alignItems: ['important'],
      alignSelf: ['important'],
      animation: ['important'],
      appearance: ['important'],
      backgroundAttachment: ['important'],
      backgroundClip: ['important'],
      backgroundImage: ['important'],
      backgroundOpacity: ['important'],
      backgroundPosition: ['important'],
      backgroundRepeat: ['important'],
      backgroundSize: ['important'],
      borderCollapse: ['important'],
      borderColor: ['important'],
      borderOpacity: ['important'],
      borderRadius: ['important'],
      borderStyle: ['important'],
      borderWidth: ['important'],
      boxShadow: ['important'],
      boxSizing: ['important'],
      clear: ['important'],
      container: ['important'],
      cursor: ['important'],
      display: ['important'],
      divideColor: ['important'],
      divideOpacity: ['important'],
      divideStyle: ['important'],
      divideWidth: ['important'],
      fill: ['important'],
      flex: ['important'],
      flexDirection: ['important'],
      flexGrow: ['important'],
      flexShrink: ['important'],
      flexWrap: ['important'],
      float: ['important'],
      fontFamily: ['important'],
      fontSize: ['important'],
      fontSmoothing: ['important'],
      fontStyle: ['important'],
      fontVariantNumeric: ['important'],
      fontWeight: ['important'],
      gap: ['important'],
      gradientColorStops: ['important'],
      gridAutoColumns: ['important'],
      gridAutoFlow: ['important'],
      gridAutoRows: ['important'],
      gridColumn: ['important'],
      gridColumnEnd: ['important'],
      gridColumnStart: ['important'],
      gridRow: ['important'],
      gridRowEnd: ['important'],
      gridRowStart: ['important'],
      gridTemplateColumns: ['important'],
      gridTemplateRows: ['important'],
      height: ['important'],
      inset: ['important'],
      justifyContent: ['important'],
      justifyItems: ['important'],
      justifySelf: ['important'],
      letterSpacing: ['important'],
      lineHeight: ['important'],
      listStylePosition: ['important'],
      listStyleType: ['important'],
      margin: ['important'],
      maxHeight: ['important'],
      maxWidth: ['important'],
      minHeight: ['important'],
      minWidth: ['important'],
      objectFit: ['important'],
      objectPosition: ['important'],
      opacity: ['important', 'disabled'],
      order: ['important'],
      outline: ['important'],
      overflow: ['important'],
      overscrollBehavior: ['important'],
      placeContent: ['important'],
      placeItems: ['important'],
      placeSelf: ['important'],
      placeholderColor: ['important'],
      placeholderOpacity: ['important'],
      pointerEvents: ['important'],
      position: ['important'],
      resize: ['important'],
      ringColor: ['important'],
      ringOffsetColor: ['important'],
      ringOffsetWidth: ['important'],
      ringOpacity: ['important'],
      ringWidth: ['important'],
      rotate: ['important'],
      scale: ['important'],
      skew: ['important'],
      space: ['important'],
      stroke: ['important'],
      strokeWidth: ['important'],
      tableLayout: ['important'],
      textAlign: ['important'],
      textColor: ['important'],
      textDecoration: ['important'],
      textOpacity: ['important'],
      textOverflow: ['important'],
      textTransform: ['important'],
      transform: ['important'],
      transformOrigin: ['important'],
      transitionDelay: ['important'],
      transitionDuration: ['important'],
      transitionProperty: ['important'],
      transitionTimingFunction: ['important'],
      translate: ['important'],
      userSelect: ['important'],
      verticalAlign: ['important'],
      visibility: ['important'],
      whitespace: ['important'],
      width: ['important'],
      wordBreak: ['important'],
      zIndex: ['important'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { color: 'white' },
        h2: { color: 'white' },
        h3: { color: 'white' },
        h4: { color: 'white' },
        h5: { color: 'white' },
        h6: { color: 'white' },
        p: { color: 'white' },
        span: { color: 'white' },
        a: { color: 'white' },
      });
    }),
    plugin(function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls(decl => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
