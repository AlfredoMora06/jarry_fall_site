import { unstable_createMuiStrictModeTheme as createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      light: "#FF9DCC",
      main: "#FF007A"
    },
    secondary: {
      main: "#FFEAF4"
    },
  },
  typography: {
    fontFamily: 'Inter'
  }
})
  
export default theme