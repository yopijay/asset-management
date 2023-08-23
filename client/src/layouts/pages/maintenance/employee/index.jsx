// Libraries
import { useEffect } from "react";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Core
import { FormPrvdr } from "core/context/Form"; // Provider
import { ListPrvdr } from "core/context/List"; // Provider

// Components
import List from "./components/list";
import Form from "./components/form";

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
    useEffect(() => { document.title = 'GAMS | Employee' }, []);

    return (
        <Stack sx= { container }>
            <Routes>
                <Route exact path= "/" element= { <FormPrvdr><ListPrvdr><List /></ListPrvdr></FormPrvdr> } />
                <Route exact path= "/form/:type" element= { <FormPrvdr><Form /></FormPrvdr> } />
                <Route exact path= "/form/:type/:id" element= { <FormPrvdr><Form /></FormPrvdr> } />
            </Routes>
        </Stack>
    );
}

export default Index;