// Libraries
import { Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Core
import { ListPrvdr } from "core/context/List"; // Context

// Components
import Title from "../../components/list/Title";
import Search from "../../components/list/Search";
import Sort from "../../components/list/Sort";
import Items from "../../components/list/Items";
import Logs from "../../components/history/Logs";

// Constants
import { container, content, history, items } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack sx= { container }>
            <Routes>
                <Route exact path= "/" element= {
                    <ListPrvdr>
                        <Stack sx= { content } spacing= { 5 }>
                            <Title />
                            <Stack direciton= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } flexGrow= { 1 }>
                                <Search />
                                <Stack sx= { items } spacing= { 1 }>
                                    <Sort />
                                    <Items />
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
                    </ListPrvdr>
                 } />
            </Routes>
        </Stack>
    );
}

export default Index;