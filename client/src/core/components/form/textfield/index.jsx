// Libraries
import { Skeleton, Stack, TextField, ThemeProvider, Typography } from "@mui/material";
import PropTypes from "prop-types";

// Core
import { Components } from "core/theme"; // Theme

const Index = props => {
    const { register, label, fetching, disabled, name, type, value, uppercase, errors, ...others } = props;

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

Index.defaultProps = { label: '', type: 'text', disabled: false, uppercase: true }
Index.propTypes = {
    register: PropTypes.func.isRequired,
    label: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    uppercase: PropTypes.bool,
    errors: PropTypes.object.isRequired,
    others: PropTypes.object
}

export default Index;