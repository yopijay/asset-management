// Libraries
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import { btnicon, btntxt, download, logs, search, upload } from "../style";

const Search = ({ request }) => {
    const { category } = useParams();
    const { register, setValue, getValues } = useContext(FormCntxt);
    const { data } = useContext(AccountCntxt);

    let authcreate = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.stocks.create);

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
            <form autoComplete= "off">
                <Box sx= { search }>
                    <TextField { ...register('searchtxt') } variant= "standard" size= "small" fullWidth InputProps= {{ disableUnderline: true, 
                        startAdornment: <InputAdornment position= "start"><FontAwesomeIcon icon= { solid('magnifying-glass') } /></InputAdornment> }}
                        placeholder= "Search..." 
                        onChange= { e => { 
                            setValue('searchtxt', e.target.value); 
                            setValue('category', (category).toUpperCase()); 
                            request({ table: 'tbl_stocks', data: getValues() }) } } />
                </Box>
            </form>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                <Typography sx= { logs }><FontAwesomeIcon icon= { solid('clock-rotate-left') } /></Typography>
                <Typography sx= { download }><FontAwesomeIcon icon= { solid('download') } /></Typography>
                <Typography sx= { upload }><FontAwesomeIcon icon= { solid('upload') } /></Typography>
                { authcreate ? 
                    <Typography component= { Link } to= { `/assets/stocks/${category}/form/new` } sx= { btnicon }><FontAwesomeIcon icon= { solid('plus') } /></Typography> : '' }
                { authcreate ? 
                    <Typography component= { Link } 
                        to= { `/assets/stocks/${category}/form/new` } sx= { btntxt }>New { (category.charAt(0).toUpperCase() + category.slice(1)).replace('-', ' ') }</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Search;