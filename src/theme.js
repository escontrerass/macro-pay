import { createTheme } from '@mui/material/styles'

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#FFD300',
      contrastText: '#004AC1',
    },
    secondary: {
      main: '#004AC1',
      contrastText: '#FFD300',
    },
    common: {
      main: '#2B3445',
      contrastText: '#D8E0E9',
    },
    info: {
      main: '#D8E0E9',
      contrastText: '#2B3445',
    },
    warning: {
      main: 'rgba(0,0,0,0)',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#7D879C',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'Roboto', 'sans-serif'].join(','),
  },
})
