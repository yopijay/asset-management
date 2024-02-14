// Libraries
import { useContext, useState } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autocomplete, Box, Grid, Skeleton, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { useGet } from "core/function/global"; // Function
import { dropdown } from "core/api"; // API

import { lbl, orderby, select } from "../style"; // Styles

const Sort = ({ records }) => {
    const { sort, setsort, listing, setlisting } = useContext(ListCntxt);
    const { getValues, setValue, control } = useContext(FormCntxt);
    const [ order, setorder ] = useState('date_created');

    const { data: category, isFetching: ctgfetching } = 
        useGet({ key: ['ctg_dd'], request: dropdown({ table: 'tbl_category', data: { type: 'assets', purpose: 'filter' } }), options: { refetchOnWindowFocus: false } });

    const onclick = name => { setValue('orderby', name); setorder(name); records({ table: 'tbl_stocks_received', data: getValues() }); }
    const onsort = sort => { setsort(sort); setValue('sort', sort); records({ table: 'tbl_stocks_received', data: getValues() }); }

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
            <Box sx= {{ width: { xs: '53%', sm: '60%', md: '40%' } }}>
                <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Grid item>
                        <Box sx= { select }>
                            { ctgfetching ? <Skeleton variant= "rounded" height= "35px" /> :
                                category?.length > 0 ? 
                                    <Controller control= { control } name= "category_id"
                                        render= {({ field: { value } }) => (
                                            <Autocomplete options= { category?.sort((a, b) => a.id - b.id) } disableClearable
                                                getOptionLabel= { option => option.name || option.id } noOptionsText= "No results..." 
                                                getOptionDisabled= { option => option.id === 0 || option.id === '' }
                                                isOptionEqualToValue= { (option, value) => option.name === value.name || option.id === value.id }
                                                onChange= { (e, item) => { 
                                                    setValue('category_id', item.id); 
                                                    setValue('orderby', order);
                                                    records({ table: 'tbl_stocks_received', data: getValues() }); } }
                                                renderInput= { params => <TextField { ...params } variant= "standard" size= "small" fullWidth /> }
                                                value= { category?.find(data => { return data.id === (getValues().category_id !== undefined ? getValues().category_id : value) }) !== undefined ?
                                                                category?.find(data => { return data.id === (getValues().category_id !== undefined ? getValues().category_id : value) }) : category?.length === 0 ?
                                                                    { id: 0, name: '-- SELECT AN ITEM BELOW --' } : category[0] } />
                                        ) } /> : <Typography color= "text.disabled" sx= { lbl }>You must create a category first!</Typography> }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                    <Typography variant= "caption" color= "#636e72">Order by:</Typography>
                    { order === 'date_created' ? <Typography variant= "caption" sx= { orderby } onClick= { () => onclick('series_no') }>Date created</Typography> :
                        order === 'series_no' ? <Typography variant= "caption" sx= { orderby } onClick= { () => onclick('date_created') }>Series no.</Typography> : '' }
                </Stack>
                { sort === 'desc' ? 
                    <Typography sx= {{ cursor: 'pointer' }} onClick= { () => onsort('asc') }><FontAwesomeIcon icon= { solid('arrow-down-z-a') } color= "#636e72" /></Typography> :
                    <Typography sx= {{ cursor: 'pointer' }} onClick= { () => onsort('desc') }><FontAwesomeIcon icon= { solid('arrow-down-a-z') } color= "#636e72" /></Typography> }
                { listing === 'list' ?
                    <Typography sx= {{ cursor: 'pointer' }} onClick= { () => setlisting('grid') }><FontAwesomeIcon icon= { solid('grip') } color= "#636e72" /></Typography> :
                    <Typography sx= {{ cursor: 'pointer' }} onClick= { () => setlisting('list') }><FontAwesomeIcon icon= { solid('list') } color= "#636e72" /></Typography> }
            </Stack>
        </Stack>
    );
}

export default Sort;