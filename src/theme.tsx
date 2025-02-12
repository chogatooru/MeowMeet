import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
         primary :  {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
          },
          
        secondary: {
            main: '#ba68c8'
        }
    },
    typography: {
        fontFamily: 'Roboto'
    }
})