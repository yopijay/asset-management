// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { ListCntxt } from "core/context/List";

// Components
import Title from "./Title";

// Constants
import { card, content, items, countcard } from "./index.style"; // Styles
import { useGet, usePost } from "core/function/global";
import { records } from "core/api";
import { Link } from "react-router-dom";

const Index = () => {
    const { list, setlist } = useContext(ListCntxt);
    useGet({ key: ['asst_count'], request: records({ table: 'tbl_category', data: { type: 'count' } }), options: { refetchOnWindowFocus: false }, onSuccess: data => setlist(data) });

    return (
        <Stack sx= { content } spacing= { 5 }>
            <Title />
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } flexGrow= { 1 } sx= {{ overflow: 'hidden' }}>
                <Stack sx= { items } spacing= { 2 }>
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ padding: '5px' }}>
                        { list.length > 0 ? 
                            list.map((data, index) => (
                                <Grid item xs= { 6 } sm= { 3 } key= { index }>
                                    <Stack sx= { card } spacing= { 2 } component= { Link } to= { `/assets-supplies/assets/${((data.name).replace(' ', '-')).toLowerCase()}` }>
                                        <Stack sx= { countcard }>
                                            <Typography variant= "h3" fontWeight= "bold">{ data.count }</Typography>
                                        </Stack>
                                        <Typography>{ data.name }</Typography>
                                    </Stack>
                                </Grid>
                            )) :
                            <Grid item xs= { 12 }></Grid> }
                    </Grid>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Index;