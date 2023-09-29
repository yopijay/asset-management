// Libraries
import { Box, Stack } from "@mui/material";

// Core
import Loader from "core/components/loader/Screen"; // Loader

// Components
import Title from "../../components/Title";
import Search from "../../components/Search";
import Sort from "../../components/Sort";
import Items from "../../components/Items";

// Constants
import { content, items, loader } from "./index.style"; // Styles

const Index = props => {
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
        </Stack>
    );
}

export default Index;