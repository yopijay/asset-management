// Libraries
import { Autocomplete, Box, Skeleton, Stack, TextField, ThemeProvider, Typography } from "@mui/material";
import { useContext } from "react";
import { Controller } from "react-hook-form";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { Components } from "core/theme"; // Theme

const Index = props => {
    const { label, fetching, disabled, name, options, multiple = false, uppercase = true, ...others } = props;
    const { control, errors, getValues } = useContext(FormCntxt);

    // Custom styles
    const select = {
        width: '100%',
        border: 'solid 1px #dfe4ea',
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

export default Index;