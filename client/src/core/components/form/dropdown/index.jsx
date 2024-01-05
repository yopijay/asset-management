// Libraries
import { Autocomplete, Box, Skeleton, Stack, TextField, ThemeProvider, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

// Core
import { Components } from "core/theme"; // Theme

const Index = props => {
    const { label, fetching, disabled, name, options, multiple, uppercase, control, errors, getValues, ...others } = props;

    // Custom styles
    const select = {
        width: '100%',
        border: 'solid 1px #dfe6e9',
        padding: {
            xs: '12px 8px 9px 8px',
            md: '9px 10px 6px 10px'
        },
        marginBottom: '5px',
        borderRadius: '5px',
        transition: 'all 0.2s ease-in-out'
    }
    
    const lbl = {
        whiteSpace: 'nowrap', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis', 
        width: '100%',
        padding: '2px 0',
        transition: 'all 0.2s ease-in-out'
    }

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography variant= "body2" gutterBottom color= "#636e72">{ label }</Typography>
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
                <Box sx= { select }>
                    { options.length > 0 ? 
                        <Controller control= { control } name= { name }
                            render= {({ field: { value } }) => (
                                <Autocomplete options= { options?.sort((a, b) => a.id - b.id) } disabled= { disabled } disableClearable multiple= { multiple }
                                    getOptionLabel= { option => option.name || option.id } noOptionsText= "No results..." 
                                    getOptionDisabled= { option => option.id === 0 || option.id === '' }
                                    isOptionEqualToValue= { (option, value) => option.name === value.name || option.id === value.id }
                                    renderInput= { params => <TextField { ...params } variant= "standard" size= "small" fullWidth /> }
                                    { ...others }
                                    value= { options?.find(data => { return data.id === (getValues()[name] !== undefined ? getValues()[name] : value) }) !== undefined ?
                                                    options?.find(data => { return data.id === (getValues()[name] !== undefined ? getValues()[name] : value) }) : options?.length === 0 ?
                                                        { id: 0, name: '-- SELECT AN ITEM BELOW --' } : options[0] } />
                            ) } /> :
                        <Typography color= "text.disabled" sx= { lbl }>You must create a { (label.replace('*', '')).toLowerCase() } first!</Typography> }
                </Box> }
            </ThemeProvider>
            <Typography variant= "body2" color= "error.dark">{ errors[name]?.message }</Typography>
        </Stack>
    );
}

Index.defaultProps = { label: '', disabled: false, multiple: false, uppercase: true }
Index.propTypes = {
    label: PropTypes.string,
    fetching: PropTypes.bool.isRequired, 
    disabled: PropTypes.bool, 
    name: PropTypes.string.isRequired, 
    options: PropTypes.array.isRequired, 
    multiple: PropTypes.bool, 
    uppercase: PropTypes.bool, 
    control: PropTypes.object.isRequired, 
    errors: PropTypes.object.isRequired, 
    getValues: PropTypes.func.isRequired, 
    others: PropTypes.object
}

export default Index;