// Libraries
import { Box, Stack, Typography } from "@mui/material";

// Core
import Loader from "core/components/loader/Screen"; // Loader

// Components
import Title from "../../components/list/components/Title";
import Search from "../../components/list/components/Search";
import Sort from "../../components/list/components/Sort";
import Items from "../../components/list/components/Items";
import Logs from "../../components/history/Logs";

// Constants
import { content, history, items, loader } from "./index.style"; // Styles

const List = props => {
    const { find, record, fetching, finding } = props;

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
            <Stack sx= { content } spacing= { 5 }>
                <Title />
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } flexGrow= { 1 } sx= {{ overflow: 'hidden' }}>
                    <Search request= { find } />
                    <Stack sx= { items } spacing= { 2 }>
                        <Sort refetch= { record } />
                        { !fetching && !finding ? <Items /> : <Box sx= { loader }><Loader /></Box> }
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx= { history } spacing= { 1 }>
                <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                    <Typography color= "#9DB2BF" variant= "body2">Logs</Typography>
                    <Typography color= "#9DB2BF" variant= "body2">View all</Typography>
                </Stack>
                <Logs />
            </Stack>
        </Stack>
    );
}

export default List;