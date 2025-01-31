// Libraries
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { exporttoexcel, usePost } from "core/function/global"; // Fucntion
import { excel } from "core/api"; // API

import { btnicon, btntxt, download, logs, search } from "../style";

const Search = ({ find }) => {
    const { register, setValue, getValues } = useContext(FormCntxt);
    const { data } = useContext(AccountCntxt);
    const { mutate: xlsx } = usePost({ request: excel, onSuccess: data => exporttoexcel(data) });

    let authcreate = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).maintenance.brands.create);
    let authlogs = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).maintenance.brands.logs);
    let authexport = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).maintenance.brands.export);
    // let authimport = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).maintenance.brands.import);

    useEffect(() => setValue('searchtxt', ''), [ setValue ]);

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
            <form autoComplete= "off">
                <Box sx= { search }>
                    <TextField { ...register('searchtxt') } variant= "standard" size= "small" fullWidth 
                        placeholder= "Search..." onChange= { e => { setValue('searchtxt', e.target.value); find({ table: 'tbl_brands', data: getValues() }) } }
                        InputProps= {{ disableUnderline: true, 
                                                startAdornment: <InputAdornment position= "start"><FontAwesomeIcon icon= { solid('magnifying-glass') } /></InputAdornment> }} />
                </Box>
            </form>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { .5 }>
                { authlogs ? <Typography sx= { logs } component= { Link } to= "/maintenance/brands/logs"><FontAwesomeIcon icon= { solid('clock-rotate-left') } /></Typography> : '' }
                { authexport ? 
                    <Typography sx= { download } 
                        onClick= { () => {
                            let data = getValues();
                            data['type'] = 'list';
                            xlsx({ table: 'tbl_brands', data: data });
                        } }><FontAwesomeIcon icon= { solid('download') } /></Typography> : '' }
                {/* { authimport ? <Typography sx= { upload }><FontAwesomeIcon icon= { solid('upload') } /></Typography> : '' } */}
                { authcreate ? <Typography component= { Link } to= "/maintenance/brands/form/new" sx= { btnicon }><FontAwesomeIcon icon= { solid('plus') } /></Typography> : '' }
                { authcreate ? <Typography component= { Link } to= "/maintenance/brands/form/new" sx= { btntxt }>New Brand</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Search;