// Libraries
import { Stack } from "@mui/material";
import { useContext, useEffect } from "react";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { usePost } from "core/function/global"; // Function
import { look, records } from "core/api"; // API

// Components
import Loader from "core/components/loader/Screen"; // Loader
import Title from "../../components/list/Title";
import Search from "../../components/list/Search";
import Sort from "../../components/list/Sort";
import Items from "../../components/list/Items";

// Constants
import { content, items } from "./index.style"; // Styles

const List = () => {
    const { setlist } = useContext(ListCntxt);
    const { register, getValues } = useContext(FormCntxt);
    const { mutate: find, isLoading: finding } = usePost({ request: look, onSuccess: data => setlist(data) });
    const { mutate: record, isLoading: fetching } = usePost({ request: records, options: { refetchOnWindowFocus: false }, onSuccess: data => setlist(data) });

    useEffect(() => {
        register('orderby', { value: 'date_created' });
        register('sort', { value: 'desc' });
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });

        let data = getValues();
        data['orderby'] = 'date_created';
        data['sort'] = 'desc';
        data['searchtxt'] = '';
        data['token'] = (sessionStorage.getItem('token')).split('.')[1];

        record({ table: 'tbl_company', data: data });
    }, [ register, getValues, record ]);

    return (
        <Stack sx= { content } spacing= { 5 }>
            <Title />
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } flexGrow= { 1 }>
                <Search request= { find } />
                <Stack sx= { items } spacing= { 1 }>
                    <Sort refetch= { record } />
                    { !fetching && !finding ? <Items /> : <Loader /> }
                </Stack>
            </Stack>
        </Stack>
    );
}

export default List;