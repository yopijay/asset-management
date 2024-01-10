// Libraries
import { useContext, useEffect } from "react";
import { Stack } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { GlobalCntxt } from "core/context/Global"; // Context
import { FormPrvdr } from "core/context/Form"; // Provider
import { ListPrvdr } from "core/context/List"; // Provider

// Components
import List from "./components/list";
import Form from "./components/form";

// Custom styles
const container = {
    width: '100%',
    height: '100vh',
    padding: {
        xs: '80px 0 20px 0',
        lg: '100px 20px 20px 20px'
    },
    overflow: 'hidden'
}

const Index = () => {
    const navigate = useNavigate();
    const { setactive } = useContext(GlobalCntxt);
    const { data } = useContext(AccountCntxt);

    useEffect(() => {
        if(data.user_level !== 'superadmin' && (data.permission === null || !JSON.parse(data.permission).maintenance.position.list)) { navigate('/'); }
        else {
            document.title = 'KC | Position';
            setactive('position');
            localStorage.setItem('nav', 'position');

        }
    }, [ data, navigate, setactive ]);

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