// Libraries
import { useContext, useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { usePost } from "core/function/global"; // Function
import { records } from "core/api"; // API
import Loader from "core/components/loader/Screen"; // Loader

import { content, loader } from "./style";

import Title from "./components/Title";
import Items from "./components/Items";

const Index = () => {
    const [ categories, setcategories ] = useState([]);
    const { register, getValues } = useContext(FormCntxt);
    const { mutate: record, isLoading: fetching } = usePost({ request: records, onSuccess: data => setcategories(data)});

    useEffect(() => {
        register('orderby', { value: 'date_created' });
        register('sort', { value: 'desc' });
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });

        let  data = getValues();
        data['orderby'] = 'date_created';
        data['sort'] = 'desc';
        data['searchtxt'] = '';
        data['token'] = ((sessionStorage.getItem('token')).split('.')[1]);

        record({ table: 'tbl_category', data: data });
    }, [ register, getValues, record ]);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 3 } sx= {{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { content } spacing= { 5 }>
                <Title />
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                    { !fetching ? <Items data= { categories } /> : <Box sx= { loader }><Loader /></Box> }
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Index;