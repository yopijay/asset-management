// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { usePost } from "core/function/global"; // Functions
import { look, records } from "core/api"; // API
import Loader from "core/components/loader/Screen"; // Loader

import { content, loader, title } from "./style";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Items from "./components/Items";

const Index = () => {
    const { category, brand } = useParams();
    const { setlist } = useContext(ListCntxt);
    const { register, getValues } = useContext(FormCntxt);
    let ctg = (category.charAt(0).toUpperCase() + category.slice(1)).replace('-', ' ');
    let brd = ((brand.charAt(0) + brand.slice(1)).replace('-', ' ')).toUpperCase();

    const { mutate: find, isLoading: finding } = usePost({ request: look, onSuccess: data => setlist(data) });
    const { mutate: record, isLoading: fetching } = usePost({ request: records, onSuccess: data => setlist(data) });

    useEffect(() => {
        register('type', { value: 'per-category' });
        register('category', { value: ctg.toUpperCase() });
        register('brand', { value: brd.toUpperCase() });
        register('orderby', { value: 'date_created' });
        register('sort', { value: 'desc' });
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });

        let data = getValues();
        data['type'] = 'per-category';
        data['category'] = ctg.toUpperCase();
        data['brand'] = brd.toUpperCase();
        data['orderby'] = 'date_created';
        data['sort'] = 'desc';
        data['searchtxt'] = '';
        data['token'] = (sessionStorage.getItem('token')).split('.')[1];

        record({ table: 'tbl_stocks', data: data });
    }, [ register, getValues, record, category, brand ]);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 3 } sx= {{ width: '100%', height: '100%' , overflow: 'hidden' }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { content } spacing= { 5 }>
                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 3 } component= { Link } to= { `/assets/stocks` } sx= {{ textDecoration: 'none' }}>
                    <FontAwesomeIcon icon= { solid('angle-left') } size= "lg" color= "#394867" />
                    <Typography sx= { title }>{ ctg } ({ brd })</Typography>
                </Stack>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                    <Search request= { find } />
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                        <Sort request= { record } />
                        { !fetching && !finding ? <Items /> : <Box sx= { loader }><Loader /></Box> }
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Index;