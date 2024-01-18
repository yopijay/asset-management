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

const Search = ({ find }) => {
    const { category } = useParams();
    const { register, setValue, getValues } = useContext(FormCntxt);
    const { data } = useContext(AccountCntxt);

    let authcreate = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.stocks.create);
    let authlogs = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.stocks.logs);
    let authexport = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.stocks.export);
    let authimport = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.stocks.import);

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
            <form autoComplete= "off">
                <Box sx= { search }>
                    <TextField { ...register('searchtxt') } variant= "standard" size= "small" fullWidth InputProps= {{ disableUnderline: true, 
                        startAdornment: <InputAdornment position= "start"><FontAwesomeIcon icon= { solid('magnifying-glass') } /></InputAdornment> }}
                        placeholder= "Search..." 
                        onChange= { e => { 
                            setValue('searchtxt', e.target.value); 
                            setValue('category', (category.replace('-', ' ')).toUpperCase()); 
                            find({ table: 'tbl_stocks', data: getValues() }) } } />
                </Box>
            </form>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { .5 }>
                { authlogs ? <Typography sx= { logs } component= { Link } to= { `/assets/stocks/${category}/logs` }><FontAwesomeIcon icon= { solid('clock-rotate-left') } /></Typography> : '' }
                { authexport ? <Typography sx= { download }><FontAwesomeIcon icon= { solid('download') } /></Typography> : '' }
                { authimport ? <Typography sx= { upload }><FontAwesomeIcon icon= { solid('upload') } /></Typography> : '' }
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