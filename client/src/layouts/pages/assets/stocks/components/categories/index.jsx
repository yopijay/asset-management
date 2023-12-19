// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { usePost } from "core/function/global"; // Functions
import { ListCntxt } from "core/context/List"; // Context
import { AccountCntxt } from "core/context/Account"; // Context
import { look, records } from "core/api"; // API
import Loader from "core/components/loader/Screen"; // Loader

import { content, history, loader, title } from "./style";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Items from "./components/Items";
import Logs from "./components/Logs";

const Index = () => {
    const { category } = useParams();
    const { setlist } = useContext(ListCntxt);
    const { data } = useContext(AccountCntxt);
    const { register, getValues } = useContext(FormCntxt);

    const { mutate: find, isLoading: finding } = usePost({ request: look, onSuccess: data => setlist(data) });
    const { mutate: record, isLoading: fetching } = usePost({ request: records, onSuccess: data => setlist(data) });

    let authlogs = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).maintenance.brands.logs);

    useEffect(() => {
        register('category', { value: (category.replace('-', ' ')).toUpperCase() });
        register('brand', { value: 'all' });
        register('orderby', { value: 'serial_no' });
        register('sort', { value: 'desc' });
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });

        let data = getValues();
        data['category'] = (category.replace('-', ' ')).toUpperCase();
        data['brand'] = 'all';
        data['orderby'] = 'serial_no';
        data['sort'] = 'desc';
        data['searchtxt'] = '';
        data['token'] = (sessionStorage.getItem('token')).split('.')[1];

        record({ table: 'tbl_stocks', data: data });
    }, [ register, category, getValues, record ]);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 3 } sx= {{ width: '100%', height: '100%' , overflow: 'hidden' }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { content({ condition: authlogs }) } spacing= { 5 }>
                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 3 } component= { Link } to= { `/assets/stocks` } sx= {{ textDecoration: 'none' }}>
                    <FontAwesomeIcon icon= { solid('angle-left') } size= "lg" color= "#394867" />
                    <Typography sx= { title }>{ (category.charAt(0).toUpperCase() + category.slice(1)).replace('-', ' ') }</Typography>
                </Stack>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                    <Search request= { find } />
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                        <Sort refetch= { record } />
                        { !fetching && !finding ? <Items /> : <Box sx= { loader }><Loader /></Box> }
                    </Stack>
                </Stack>
            </Stack>
            { authlogs ? <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { history } spacing= { 1 }>
                <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                    <Typography color= "#9DB2BF" variant= "body2">Logs</Typography>
                    <Typography color= "#9DB2BF" variant= "body2">View all</Typography>
                </Stack>
                <Logs />
            </Stack> : '' }
        </Stack>
    );
}

export default Index;