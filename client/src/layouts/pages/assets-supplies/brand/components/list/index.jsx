// Libraries
import { Box } from "@mui/material";
import { useContext, useEffect } from "react";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { usePost } from "core/function/global"; // Function
import { look, records } from "core/api"; // API

// Screens
import Desktop from "../../screens/desktop/List";
import Tablet from "../../screens/tablet/List";
import Mobile from "../../screens/mobile/List";

const Index = () => {
    const { setlist } = useContext(ListCntxt);
    const { register, getValues } = useContext(FormCntxt);
    const { mutate: find, isLoading: finding } = usePost({ request: look, onSuccess: data => setlist(data) });
    const { mutate: record, isLoading: fetching } = usePost({ request: records, onSuccess: data => setlist(data) });

    useEffect(() => {
        register('orderby', { value: 'date_created' });
        register('sort', { value: 'desc' });
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });

        let data = getValues();
        data['orderby'] = 'date_created';
        data['sort'] = 'desc';
        data['searchtxt'] = '';
        data['token'] = (sessionStorage.getItem('token')).split('.')[1];

        record({ table: 'tbl_assets_supplies_brand', data: data });
    }, [ register, getValues, record ]);

    return (
        <Box width= "100%" height= "100%">
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