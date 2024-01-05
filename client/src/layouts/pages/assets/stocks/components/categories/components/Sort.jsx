// Libraries
import { useContext, useState } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autocomplete, Box, Skeleton, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useParams } from "react-router-dom";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { useGet } from "core/function/global"; // Function
import { dropdown } from "core/api"; // API

// Constants
import { lbl, orderby, select } from "../style"; // Styles

const Sort = ({ refetch }) => {
    const { category } = useParams();
    const { sort, setsort, listing, setlisting } = useContext(ListCntxt);
    const { getValues, setValue, control } = useContext(FormCntxt);
    const [ order, setorder ] = useState('serial_no');

    const { data: brands, isFetching: brdfetching } = 
        useGet({ key: ['brd_dd'], 
                        request: dropdown({ table: 'tbl_brands', 
                                        data: { type: 'per-category-name', category: category.replace('-', ' ') } }), 
                        options: { refetchOnWindowFocus: false } });

    const onclick = name => { setValue('orderby', name); setorder(name); refetch({ table: 'tbl_stocks', data: getValues() }); }
    const onsort = sort => { setsort(sort); setValue('sort', sort); refetch({ table: 'tbl_stocks', data: getValues() }); }

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
            <Box sx= { select }>
                { brdfetching ? <Skeleton variant= "rounded" height= "35px" /> :
                    brands?.length > 0 ? 
                        <Controller control= { control } name= "brand"
                            render= {({ field: { value } }) => (
                                <Autocomplete options= { brands?.sort((a, b) => a.id - b.id) } disableClearable
                                    getOptionLabel= { option => option.name || option.id } noOptionsText= "No results..." 
                                    getOptionDisabled= { option => option.id === 0 || option.id === '' }
                                    isOptionEqualToValue= { (option, value) => option.name === value.name || option.id === value.id }
                                    onChange= { (e, item) => { 
                                        setValue('brand', item.id); 
                                        setValue('orderby', order);
                                        setValue('category', (category.replace('-', ' ')).toUpperCase()); 
                                        refetch({ table: 'tbl_stocks', data: getValues() }); } }
                                    renderInput= { params => <TextField { ...params } variant= "standard" size= "small" fullWidth /> }
                                    value= { brands?.find(data => { return data.id === (getValues().brand !== undefined ? getValues().brand : value) }) !== undefined ?
                                                    brands?.find(data => { return data.id === (getValues().brand !== undefined ? getValues().brand : value) }) : brands?.length === 0 ?
                                                        { id: 0, name: '-- SELECT AN ITEM BELOW --' } : brands[0] } />
                            ) } /> : <Typography color= "text.disabled" sx= { lbl }>You must create a brand first!</Typography> }
            </Box>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                    <Typography variant= "caption" color= "#636e72">Order by:</Typography>
                    { order === 'serial_no' ? <Typography variant= "caption" sx= { orderby } onClick= { () => onclick('model') }>Serial no.</Typography> :
                        order === 'model' ? <Typography variant= "caption" sx= { orderby } onClick= { () => onclick('serial_no') }>Model</Typography> : '' }
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