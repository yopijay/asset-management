// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { usePost } from "core/function/global"; // Functions
import { look, records } from "core/api"; // API
import Loader from "core/components/loader/Screen"; // Loader

import { content, loader, title } from "./style";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Items from "./components/Items";

const Index = () => {
    const { category } = useParams();
    const [ stocks, setstocks ] = useState([]);
    const { register, getValues } = useContext(FormCntxt);
    let ctg = (category.charAt(0).toUpperCase() + category.slice(1)).replace('-', ' ');

    const { mutate: find, isLoading: finding } = usePost({ request: look, onSuccess: data => setstocks(data) });
    const { mutate: record, isLoading: fetching } = usePost({ request: records, onSuccess: data => setstocks(data) });

    useEffect(() => {
        register('category', { value: ctg.toUpperCase() });
        register('brand', { value: 'all' });
        register('orderby', { value: 'date_created' });
        register('sort', { value: 'desc' });
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });

        let data = getValues();
        data['category'] = ctg.toUpperCase();
        data['brand'] = 'all';
        data['orderby'] = 'date_created';
        data['sort'] = 'desc';
        data['searchtxt'] = '';
        data['token'] = (sessionStorage.getItem('token')).split('.')[1];

        record({ table: 'tbl_stocks', data: data });
    }, [ register, getValues, ctg, record ]);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 3 } sx= {{ width: '100%', height: '100%' , overflow: 'hidden' }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { content } spacing= { 5 }>
                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 3 } component= { Link } to= { `/assets/stocks` } sx= {{ textDecoration: 'none' }}>
                    <FontAwesomeIcon icon= { solid('angle-left') } size= "lg" color= "#394867" />
                    <Typography sx= { title }>{ ctg }</Typography>
                </Stack>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                    <Search request= { find } />
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                        <Sort request= { record } />
                        { !fetching && !finding ? <Items list= { stocks } /> : <Box sx= { loader }><Loader /></Box> }
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Index;