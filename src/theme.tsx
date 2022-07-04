import { createTheme, PaletteOptions } from "@mui/material/styles";
const palette: PaletteOptions = {
    primary: {
      main: "#3f50b5",
      dark: '#151F30',
      contrastText: "#A1C7E0",
    },
    background: {
      default: "#e8eaf6",
    },
  };
  
  const theme = createTheme({
    palette,
  });
  
  export default theme;