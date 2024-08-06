import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff', 
    },
      secondary: {
        main: '#D92E3C',
        active: '#c32936',
      },
      background: {
        default: '#fff',  // White background for default
        paper: '#f9f9f9',  // Light grey background for paper elements
      },
      text: {
        primary: '#333',  // Dark grey for primary text
        secondary: '#666',  // Lighter grey for secondary text
        disabled: '#aaa',  // Greyed out text for disabled content
      },
     
    },
    typography: {
        fontFamily:  "Helvetica",
        fontSize: 14,
        h1: {
          fontSize: '2.25rem',  // Example size for h1
        },
        h2: {
          fontSize: '1.75rem',  // Example size for h2
        },
      },
      breakpoints: {
        values: {
          xs: 0,   // Extra small devices
          sm: 600, // Small devices
          md: 960, // Medium devices
          lg: 1280,// Large devices
          xl: 1920,// Extra large devices
        },
      },
    });