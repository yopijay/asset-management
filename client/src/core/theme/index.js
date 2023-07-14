// Libraries
import { createTheme } from "@mui/material";

export const Theme = createTheme({
    typography: {
        fontFamily: [ '-apple-system', 'Montserrat' ],
        fontSize: 12,
        color: '#212A3E'
    },
    components: {
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:before': { borderBottom: 'none' },
                    '&:after': { borderBottom: 'none' },
                    '&.Mui-disabled:before': { borderBottom: 'none' },
                    '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' }
                },
                input: { fontFamily: 'Montserrat' }
            }
        }
    }
});

export const Components = custom => createTheme({
    components: {
        ...custom
    }
});