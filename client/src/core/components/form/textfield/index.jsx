// Libraries
import { Skeleton, Stack, TextField, ThemeProvider, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { Components } from "core/theme"; // Theme

const Index = props => {
    const { label, fetching, disabled, name, type = 'text', value, uppercase = true, ...others } = props;
    const { register, errors } = useContext(FormCntxt);

    // Custom styles
    const input = {
        border: 'solid 1px #ced6e0',
        padding: {
            xs: '10px 8px 8px 8px',
            md: '6px 10px 5px 10px'
        },
        borderRadius: '5px',
        transition: 'all 0.2s ease-in-out'
    }

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            <ThemeProvider theme= { Components({
                MuiInput: {
                    styleOverrides: {
                        root: {
                            '&:before': { borderBottom: 'none' },
                            '&:after': { borderBottom: 'none' },
                            '&.Mui-disabled:before': { borderBottom: 'none' },
                            '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' }
                        },
                        input: { textTransform: uppercase ? 'uppercase' : '', fontFamily: 'Montserrat' }
                    }
                }
            }) }>
            { fetching ? <Skeleton variant= "rounded" height= "35px" /> : 
                <TextField name= { name } { ...register(name) } variant= "standard" value= { value } { ...others } disabled= { disabled } sx= { input } type= { type } /> }
            </ThemeProvider>
            <Typography variant= "body2" color= "error.dark">{ errors[name]?.message }</Typography>
        </Stack>
    );
}

export default Index;