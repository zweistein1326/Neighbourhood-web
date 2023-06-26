import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
    allVariants: {
      color: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face{
                    font-family: 'Source Sans Pro', sans-serif;
                    font-style: 'normal';
                    color: red';
                }`,
    },
  },
  palette: {
    text: {
      primary: "#000000",
    },
    primary: {
      main: "#0066FF",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
