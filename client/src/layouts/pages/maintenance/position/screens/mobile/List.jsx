// Libraries
import { Box, Stack } from "@mui/material";

// Core
import Loader from "core/components/loader/Screen"; // Loader

// Components
import Title from "../../components/list/components/Title";
import Search from "../../components/list/components/Search";
import Sort from "../../components/list/components/Sort";
import Items from "../../components/list/components/Items";

// Constants
import { content, items, loader } from "./index.style"; // Styles

const List = props => {
    const { find, record, fetching, finding } = props;

    return (
        <Stack sx= { content } spacing= { 5 }>
            <Title />
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } flexGrow= { 1 } sx= {{ overflow: 'hidden' }}> 
                <Search request= { find } />
                <Stack sx= { items } spacing= { 1 }>
                    <Sort refetch= { record } />
                    { !fetching && !finding ? <Items /> : <Box sx= { loader }><Loader /></Box> }
                </Stack>
            </Stack>
        </Stack>
    );
}

export default List;