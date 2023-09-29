// Libraries
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { usePost } from "core/function/global"; // Function
import { look, records } from "core/api"; // API

// Screens
import Desktop from "./screens/desktop";
import Tablet from "./screens/tablet";
import Mobile from "./screens/mobile";

const Index = () => {
    const { category } = useParams();
    const { setlist } = useContext(ListCntxt);
    const { register, getValues } = useContext(FormCntxt);
    const { mutate: find, isLoading: finding } = usePost({ request: look, onSuccess: data => setlist(data) });
    const { mutate: record, isLoading: fetching } = usePost({ request: records, onSuccess: data => setlist(data) });

    useEffect(() => {
        register('orderby', { value: 'date_created' });
        register('sort', { value: 'desc' });
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });
        register('type', { value: 'per-category' });
        register('category', { value: category });

        let data = getValues();
        data['orderby'] = 'date_created';
        data['sort'] = 'desc';
        data['searchtxt'] = '';
        data['token'] = (sessionStorage.getItem('token')).split('.')[1];
        data['type'] = 'per-category';
        data['category'] = category;

        record({ table: 'tbl_stocks', data: data });
    }, [ category, register, getValues, record ]);

    return (
        <Box width= "100%">
            <Box sx= {{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, transition: 'all 0.2s ease-in-out' }}>
                <Desktop find= { find } record= { record } fetching= { fetching } finding= { finding } />
            </Box>
            <Box sx= {{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'none' }, transition: 'all 0.2s ease-in-out' }}>
                <Tablet find= { find } record= { record } fetching= { fetching } finding= { finding } />
            </Box>
            <Box sx= {{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' }, transition: 'all 0.2s ease-in-out' }}>
                <Mobile find= { find } record= { record } fetching= { fetching } finding= { finding } />
            </Box>
        </Box>
    );
}

export default Index;