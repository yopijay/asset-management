// Libraries
import { Stack } from "@mui/material";
import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { GlobalCntxt } from "core/context/Global"; // Context
import { FormPrvdr } from "core/context/Form"; // Provider
import { ListPrvdr } from "core/context/List"; // Provider

// Components
import List from "./components/list";
import Logs from "./components/logs";
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
    const navigate = useNavigate();
    const { setactive } = useContext(GlobalCntxt);
    const { data } = useContext(AccountCntxt);

    useEffect(() => {
        if(data.user_level !== 'superadmin' && (data.permission === null || !JSON.parse(data.permission).setup.route.list)) { navigate('/'); }
        else {
            document.title = 'KC | Route';
            setactive('route');
            localStorage.setItem('nav', 'route'); 
        }
    }, [ data, navigate, setactive ]);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= { container }>
            <Routes>
                <Route exact path= "/" element= { <FormPrvdr><ListPrvdr><List /></ListPrvdr></FormPrvdr> } />
                <Route exact path= "/logs" element= { <FormPrvdr><ListPrvdr><Logs /></ListPrvdr></FormPrvdr> } />
                <Route exact path= "/form/:type" element= { <FormPrvdr><Form /></FormPrvdr> } />
                <Route exact path= "/form/:type/:id" element= { <FormPrvdr><Form /></FormPrvdr> } />
            </Routes>
        </Stack>
    );
}

export default Index;