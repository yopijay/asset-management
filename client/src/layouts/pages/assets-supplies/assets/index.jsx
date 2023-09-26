// Libraries
import { useEffect } from "react";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Core
import { ListPrvdr } from "core/context/List"; // Provider

// Components
import Dashboard from "./components/dashboard";

// Custom styles
const container = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    overflow: 'hidden',
    '&::-webkit-scrollbar': { display: 'none' }
}

const Index = () => {
    useEffect(() => { document.title = 'GAMS | Assets' }, []);

    return (
        <Stack sx= { container }>
            <Routes>
                <Route exact path= "/" element= { <ListPrvdr><Dashboard /></ListPrvdr> } />
                <Route exact path= "/:category" element= { '' } />
            </Routes>
        </Stack>
    );
}

export default Index;