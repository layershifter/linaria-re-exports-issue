const react_1 = require('@griffel/react');
//
// const createArrowStyles = require('./createArrowStyles');
// const theme = require('./theme');
//
// const useStyles = react_1.makeStyles({
//   root: {
//     ...theme.typographyStyles.body1,
//   },
// });

const test = require('./test')

const useStyles = react_1.makeStyles({
  root: {
    color: test.tokens.colorTransparentStroke
  },
});
