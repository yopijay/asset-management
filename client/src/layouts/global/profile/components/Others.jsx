// Libraries
import { Autocomplete, Box, Grid, Stack, TextField, TextareaAutosize, ThemeProvider, Typography } from "@mui/material";
import { Components } from "core/theme";
import { useContext } from "react";
import { Controller } from "react-hook-form";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import { dropdown, lbl, select, textarea } from "../style";

const Others = () => {
    const { data } = useContext(AccountCntxt);
    const { control, getValues, register, setValue } = useContext(FormCntxt);
    const _gender = [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'male', name: 'MALE' }, { id: 'female', name: 'FEMALE' }];
    const _employment_status = [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'intern', name: 'INTERN' }, { id: 'probation', name: 'PROBATIONARY' }, 
                                                    { id: 'regular', name: 'REGULAR' }, { id: 'retired', name: 'RETIRED' }, { id: 'resigned', name: 'RESIGNED' }];

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 6 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography variant= "body2" gutterBottom color= "#636e72">*Gender</Typography>
                    <ThemeProvider theme= { Components(dropdown) }>
                        <Box sx= { select }>
                            { _gender.length > 0 ? 
                                <Controller control= { control } name= "gender"
                                    render= {({ field: { value } }) => (
                                        <Autocomplete options= { _gender?.sort((a, b) => a.id - b.id) } disableClearable
                                            getOptionLabel= { option => option.name || option.id } noOptionsText= "No results..." 
                                            getOptionDisabled= { option => option.id === 0 || option.id === '' } disabled= { data.user_level === 'superadmin' }
                                            isOptionEqualToValue= { (option, value) => option.name === value.name || option.id === value.id }
                                            onChange= { (e, item) => { setValue('gender', item.id) } }
                                            renderInput= { params => <TextField { ...params } variant= "standard" size= "small" fullWidth /> }
                                            value= { _gender?.find(data => { return data.id === (getValues().gender !== undefined ? getValues().gender : value) }) !== undefined ?
                                                            _gender?.find(data => { return data.id === (getValues().gender !== undefined ? getValues().gender : value) }) : _gender?.length === 0 ?
                                                                { id: 0, name: '-- SELECT AN ITEM BELOW --' } : _gender[0] } />
                                    ) } /> :
                                <Typography color= "text.disabled" sx= { lbl }>You must create a gender first!</Typography> }
                        </Box>
                    </ThemeProvider>
                </Stack>
            </Grid>
            <Grid item xs= { 6 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography variant= "body2" gutterBottom color= "#636e72">*Employment Status</Typography>
                    <ThemeProvider theme= { Components(dropdown) }>
                        <Box sx= { select }>
                            { _employment_status.length > 0 ? 
                                <Controller control= { control } name= "employment_status"
                                    render= {({ field: { value } }) => (
                                        <Autocomplete options= { _employment_status?.sort((a, b) => a.id - b.id) } disableClearable
                                            getOptionLabel= { option => option.name || option.id } noOptionsText= "No results..." 
                                            getOptionDisabled= { option => option.id === 0 || option.id === '' } disabled
                                            isOptionEqualToValue= { (option, value) => option.name === value.name || option.id === value.id }
                                            renderInput= { params => <TextField { ...params } variant= "standard" size= "small" fullWidth /> }
                                            value= { _employment_status?.find(data => { return data.id === (getValues().employment_status !== undefined ? getValues().employment_status : value) }) !== undefined ?
                                                            _employment_status?.find(data => { return data.id === (getValues().employment_status !== undefined ? getValues().employment_status : value) }) : _employment_status?.length === 0 ?
                                                                { id: 0, name: '-- SELECT AN ITEM BELOW --' } : _employment_status[0] } />
                                    ) } /> :
                                <Typography color= "text.disabled" sx= { lbl }>You must create a employment status first!</Typography> }
                        </Box>
                    </ThemeProvider>
                </Stack>
            </Grid>
            <Grid item xs= { 12 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography variant= "body2" gutterBottom color= "#636e72">Address</Typography>
                    <TextareaAutosize name= "address" minRows= { 4 } maxRows= { 4 } style= { textarea } { ...register('address') } disabled= { data.user_level === 'superadmin' } />
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Others;