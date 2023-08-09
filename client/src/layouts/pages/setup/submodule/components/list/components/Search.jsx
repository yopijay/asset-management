// Libraries
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import { useContext } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context

// Constants
import { btnicon, btntxt, download, logs, search, upload } from "../index.style"; // Styles

const Search = ({ request }) => {
    const { register, setValue, getValues } = useContext(FormCntxt);

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
            <form autoComplete= "off">
                <Box sx= { search }>
                    <TextField { ...register('searchtxt') } variant= "standard" size= "small" fullWidth InputProps= {{ disableUnderline: true, 
                        startAdornment: <InputAdornment position= "start"><FontAwesomeIcon icon= { solid('magnifying-glass') } /></InputAdornment> }}
                        placeholder= "Search..." sx= {{ padding: '' }} onChange= { e => { setValue('searchtxt', e.target.value); request({ table: 'tbl_sub_module', data: getValues() }) } } />
                </Box>
            </form>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                <Typography sx= { logs }><FontAwesomeIcon icon= { solid('clock-rotate-left') } /></Typography>
                <Typography sx= { download }><FontAwesomeIcon icon= { solid('download') } /></Typography>
                <Typography sx= { upload }><FontAwesomeIcon icon= { solid('upload') } /></Typography>
                <Typography component= { Link } to= "/setup/sub-module/form/new" sx= { btnicon }><FontAwesomeIcon icon= { solid('plus') } /></Typography>
                <Typography component= { Link } to= "/setup/sub-module/form/new" sx= { btntxt }>New Sub module</Typography>
            </Stack>
        </Stack>
    );
}

export default Search;