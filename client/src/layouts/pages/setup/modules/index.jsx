// Libraries
import { useContext, useEffect } from "react";
import { Stack } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { GlobalCntxt } from "core/context/Global"; // Context

// Components
import List from "./components/list";
import Form from "./components/form";
import { FormPrvdr } from "core/context/Form";
import { ListPrvdr } from "core/context/List";

// Styles
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
        if(data.user_level !== 'superadmin' && (data.permission === null || !JSON.parse(data.permission).setup.modules.list)) { navigate('/'); }
        else {
            document.title = 'KC | Modules';
            setactive('modules');
            localStorage.setItem('nav', 'modules');
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