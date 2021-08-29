import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#c70815',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    type: "dark",
  },
});

export default theme;