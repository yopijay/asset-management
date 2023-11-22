// Libraries
import { Stack } from "@mui/material";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Core
import { GlobalCntxt } from "core/context/Global"; // Context
import { FormPrvdr } from "core/context/Form"; // Provider
import { ListPrvdr } from "core/context/List"; // Provider

// Components
import List from "./components/list";
import Form from "./components/form";

// Styles
const container = {
    height: '100vh',
    width: '100%',
    padding: {
        xs: '80px 0 20px 0',
        lg: '100px 20px 20px 20px'
    }
}

const Index = () => {
    const { setactive } = useContext(GlobalCntxt);

    useEffect(() => {
        document.title = 'GAMS | Route';
        setactive('route');
        localStorage.setItem('nav', 'route'); 
    }, [ setactive ]);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= { container }>
            <Routes>
                <Route exact path= "/" element= { <FormPrvdr><ListPrvdr><List /></ListPrvdr></FormPrvdr> } />
                <Route exact path= "/form/:type" element= { <FormPrvdr><Form /></FormPrvdr> } />
                <Route exact path= "/form/:type/:id" element= { <FormPrvdr><Form /></FormPrvdr> } />
            </Routes>
        </Stack>
    );
}

export default Index;