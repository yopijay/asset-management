// Libraries
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import { btnicon, btntxt, download, logs, search, upload } from "../style";

const Search = ({ request }) => {
    const { register, setValue, getValues } = useContext(FormCntxt);
    const { data } = useContext(AccountCntxt);

    let authlogs = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.issuance.logs);
    let authcreate = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.issuance.create);
    let authexport = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.issuance.export);
    let authimport = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.issuance.import);

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
            <form autoComplete= "off">
                <Box sx= { search }>
                    <TextField { ...register('searchtxt') } variant= "standard" size= "small" fullWidth InputProps= {{ disableUnderline: true, 
                        startAdornment: <InputAdornment position= "start"><FontAwesomeIcon icon= { solid('magnifying-glass') } /></InputAdornment> }}
                        placeholder= "Search..." sx= {{ padding: '' }} onChange= { e => { setValue('searchtxt', e.target.value); request({ table: 'tbl_stocks_issuance', data: getValues() }) } } />
                </Box>
            </form>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                { authlogs ? <Typography sx= { logs }><FontAwesomeIcon icon= { solid('clock-rotate-left') } /></Typography> : '' }
                { authexport ? <Typography sx= { download }><FontAwesomeIcon icon= { solid('download') } /></Typography> : '' }
                { authimport ? <Typography sx= { upload }><FontAwesomeIcon icon= { solid('upload') } /></Typography> : '' }
                { authcreate ? <Typography component= { Link } to= "/assets/issuance/form/new" sx= { btnicon }><FontAwesomeIcon icon= { solid('plus') } /></Typography> : '' }
                { authcreate ? <Typography component= { Link } to= "/assets/issuance/form/new" sx= { btntxt }>Issue an item</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Search;