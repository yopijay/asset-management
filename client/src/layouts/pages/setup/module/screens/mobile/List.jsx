// Libraries
import { Stack } from "@mui/material";

// Components
import Loader from "core/components/loader/Screen"; // Loader
import Title from "../../components/list/components/Title";
import Search from "../../components/list/components/Search";
import Sort from "../../components/list/components/Sort";
import Items from "../../components/list/components/Items";

// Constants
import { content, items } from "./index.style"; // Styles

const List = props => {
    const { find, record, fetching, finding } = props;

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