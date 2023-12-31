import { createTheme } from '@mui/material/styles';




export const lightTheme = createTheme({
  
  palette: {
    mode: 'light',
    primary: {
      main: '#93c12c',
      contrastText: '#ffff'
    },
    secondary: {
      main: '#E27B60',
      contrastText: '#ffff'
    },
    info: {
      main: '#fff'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 1,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 70
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        h5: {
          transition: 'border 0.3s, color 0.3s', 
          '&:hover': {
            color: '#93c12c',
          },
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        color: 'info',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          // borderRadius: 10,
          // ":hover": {
          //   backgroundColor: 'rgba(0,0,0,0.05)',
          //   transition: 'all 0.3s ease-in-out'
          // }
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          transition: 'border 0.3s, color 0.3s', 
          '&:hover': {
            border: '1px solid #93c12c', 
            color: '#93c12c',
          },
        }
      }
    }

  }
});