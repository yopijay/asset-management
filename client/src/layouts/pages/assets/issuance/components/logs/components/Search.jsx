// Libraries
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import { useContext } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context

import { search } from "../style"; // Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Search = record => {
    const { register, setValue, getValues } = useContext(FormCntxt);

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
            <form autoComplete= "off">
                <Box sx= { search }>
                    <TextField { ...register('searchtxt') } variant= "standard" size= "small" fullWidth InputProps= {{ disableUnderline: true, 
                        startAdornment: <InputAdornment position= "start"><FontAwesomeIcon icon= { solid('magnifying-glass') } /></InputAdornment> }}
                        placeholder= "Search..." onChange= { e => { setValue('searchtxt', e.target.value); record({ table: 'tbl_stocks_issuance', data: getValues() }); } } />
                </Box>
            </form>
        </Stack>
    );
}

export default Search;