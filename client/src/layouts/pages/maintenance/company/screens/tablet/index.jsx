// Libraires
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Core
import { ListPrvdr } from "core/context/List"; // Provider

// Components
import Title from "../../components/list/Title";
import Search from "../../components/list/Search";
import Sort from "../../components/list/Sort";
import Items from "../../components/list/Items";

// Constants
import { container, content, items } from "./index.style"; // Styles

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
                    </ListPrvdr>    
                } />
                <Route exact path= "/form/:type" element= { 'CREATE' } />
                <Route exact path= "/form/:type/:id" element= { 'UPDATE' } />
            </Routes>
        </Stack>
    );
}

export default Index;