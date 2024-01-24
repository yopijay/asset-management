// Libraries
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { exporttoexcel, usePost } from "core/function/global"; // Function
import { excel } from "core/api"; // API

import { download, search } from "../style"; // Styles

const Search = props => {
    const today = `${parseInt((new Date()).getMonth()) + 1}${(new Date()).getDate()}${(new Date()).getFullYear()}`;
    const { find, register, getValues, setValue } = props;
    const { mutate: xlsx } = usePost({ request: excel, onSuccess: data => exporttoexcel(data, 'Modules', `Module Logs-${today}`) });

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
            <form autoComplete= "off">
                <Box sx= { search }>
                    <TextField { ...register('logssearchtxt') } variant= "standard" size= "small" fullWidth InputProps= {{ disableUnderline: true, 
                        startAdornment: <InputAdornment position= "start"><FontAwesomeIcon icon= { solid('magnifying-glass') } /></InputAdornment> }}
                        placeholder= "Search series no." 
                        onChange= { e => { 
                            setValue('logssearchtxt', e.target.value); 

                            let data = getValues();
                            data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                            
                            find({ table: 'tbl_modules', data: data });
                        } } />
                </Box>
            </form>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { .5 }>
                <Typography sx= { download }
                    onClick= { () => {
                        let data = getValues();
                        data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                        data['type'] = 'logs';
                        xlsx({ table: 'tbl_modules', data: data });
                    } }><FontAwesomeIcon icon= { solid('download') } /></Typography>
            </Stack>
        </Stack>
    );
}

export default Search;