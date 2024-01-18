// Libraries
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { usePost } from "core/function/global"; // Function
import { history } from "core/api"; // API

// Components
import Search from "./components/Search";
import Sort from "./components/Sort";
import Items from "./components/Items";

import { title } from "./style"; // Styles

const Index = () => {
    const [ logs, setlogs ] = useState([]);
    const { register, getValues, setValue } = useContext(FormCntxt);
    const { mutate: record, isLoading: fetching } = usePost({ request: history, onSuccess: data => setlogs(data) });

    useEffect(() => {
        register('logsorderby', { value: 'date' });
        register('logssort', { value: 'desc' });
        register('limit', { value: '' });
        register('token', { value: sessionStorage.getItem });

        let _data = getValues();
        _data['logsorderby'] = 'date';
        _data['logssort'] = 'desc';
        _data['limit'] = '';
        _data['logssearchtxt'] = '';
        _data['token'] = (sessionStorage.getItem('token')).split('.')[1];

        record({ table: 'tbl_company', data: _data });
    }, [ register, getValues, record ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 } sx= {{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 3 } component= { Link } to= { `/maintenance/company` } sx= {{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon= { solid('angle-left') } size= "lg" color= "#636e72" />
                <Typography sx= { title }>Logs</Typography>
            </Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                <Search find= { record } register= { register } getValues= { getValues } setValue= { setValue } />
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                    <Sort records= { record } setValue= { setValue } getValues= { getValues } />
                    <Items records= { logs } fetching= { fetching } />
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Index;