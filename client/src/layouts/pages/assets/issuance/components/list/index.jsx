// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { AccountCntxt } from "core/context/Account"; // Context
import { exporttoexcel, usePost } from "core/function/global"; // Function
import { excel, records } from "core/api"; // API
import Loader from "core/components/loader/Screen"; // Loader

import { content, history, loader } from "./style"; // Styles

// Components
import Title from "./components/Title";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Items from "./components/Items";
import Logs from "./components/Logs";

const Index = () => {
    const today = `${parseInt((new Date()).getMonth()) + 1}${(new Date()).getDate()}${(new Date()).getFullYear()}`;
    const { setlist } = useContext(ListCntxt);
    const { data } = useContext(AccountCntxt);
    const { register, getValues } = useContext(FormCntxt);
    const { mutate: record, isLoading: fetching } = usePost({ request: records, onSuccess: data => setlist(data) });
    const { mutate: xlsx } = usePost({ request: excel, onSuccess: data => exporttoexcel(data, 'Issuance', `Issuance-${today}`) })

    let authlogs = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.issuance.logs);

    useEffect(() => {
        register('orderby', { value: 'date_created' });
        register('sort', { value: 'desc' });
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });

        let data = getValues();
        data['orderby'] = 'date_created';
        data['sort'] = 'desc';
        data['searchtxt'] = '';
        data['token'] = (sessionStorage.getItem('token')).split('.')[1];

        record({ table: 'tbl_stocks_issuance', data: data });
    }, [ register, getValues, record ]);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 3 } sx= {{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { content({ condition: authlogs }) } spacing= { 5 }>
                <Title />
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                    <Search find= { record } xlsx= { xlsx } />
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                        <Sort records= { record } />
                        { !fetching ? <Items /> : <Box sx= { loader }><Loader /></Box> }
                    </Stack>
                </Stack>
            </Stack>
            { authlogs ? <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { history } spacing= { 1 }>
                <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                    <Typography color= "#b2bec3" variant= "body2">Logs</Typography>
                    <Typography sx= {{ textDecoration: 'none', color: '#b2bec3' }} variant= "body2" component= { Link } to= "/assets/issuance/logs">View all</Typography>
                </Stack>
                <Logs />
            </Stack> : '' }
        </Stack>
    );
}

export default Index;