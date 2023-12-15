// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { AccountCntxt } from "core/context/Account"; // Context
import { usePost } from "core/function/global"; // Functions
import { records } from "core/api"; // API
import Loader from "core/components/loader/Screen"; // Loader

import { btnicon, btntxt, content, loader } from "./style"; // Styles

import Title from "./components/Title";
import Items from "./components/Items";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Index = () => {
    const { setlist } = useContext(ListCntxt);
    const { data } = useContext(AccountCntxt);
    const { register, getValues } = useContext(FormCntxt);
    const { mutate: record, isLoading: fetching } = usePost({ request: records, onSuccess: data => setlist(data)});

    let authcreate = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.stocks.create);

    useEffect(() => {
        register('orderby', { value: 'date_created' });
        register('sort', { value: 'desc' });
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });

        let data = getValues();
        data['orderby'] = 'date_created';
        data['sort'] = 'desc';
        data['searchtxt'] = '';
        data['token'] = (sessionStorage.getItem('token')).split('.')[1];

        record({ table: 'tbl_category', data: data });
    }, [ register, getValues, record ]);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 3 } sx= {{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { content } spacing= { 5 }>
                <Title />
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                    <Stack direction= "row" justifyContent= "flex-end" alignItems= "center">
                        { authcreate ? <Typography component= { Link } to= "/assets/stocks/form/new" sx= { btnicon }><FontAwesomeIcon icon= { solid('plus') } /></Typography> : '' }
                        { authcreate ? <Typography component= { Link } to= "/assets/stocks/form/new" sx= { btntxt }>New Stocks</Typography> : '' }
                    </Stack>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }  sx= {{ height: '100%', overflow: 'hidden' }}>
                        { !fetching ? <Items /> : <Box sx= { loader }><Loader /></Box> }
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Index;