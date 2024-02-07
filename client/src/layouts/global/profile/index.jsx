import { Box, Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { GlobalCntxt } from "core/context/Global"; // Context
import { AccountCntxt } from "core/context/Account"; // Context
import { successToast, usePost } from "core/function/global"; // Function
import { update } from "core/api"; // API

import Picture from "./components/Picture";
import Name from "./components/Name";
import Others from "./components/Others";
import Account from "./components/Account";
import { card, content, savebtn, subtitle, title } from "./style";

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
    const { data } = useContext(AccountCntxt);
    const { setactive } = useContext(GlobalCntxt);
    const { handleSubmit, setValue, setError } = useContext(FormCntxt);

    const { mutate: updating } =
        usePost({ request: update,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/profile', { replace: true })); }
            }
        });

    useEffect(() => {
        let _data = Object.keys(data);

        document.title = 'KC | Profile';
        setactive('profile');
        localStorage.setItem('nav', 'profile');
        
        for(let count = 0; count < _data.length; count++) { setValue(_data[count], data[_data[count]]); }
    }, [ data, setValue, setactive ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { container }>
            <Stack sx= { content } spacing= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography sx= { title }>Account Settings</Typography>
                    <Typography variant= "caption" color= "#b2bec3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                        malesuada quam ut, vulputate massa.</Typography>
                </Stack>
                <Stack sx= { card }>
                    <form autoComplete= "off">
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                                <Typography sx= { subtitle }>Basic info</Typography>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                                    <Picture />
                                    <Box><Name /></Box>
                                    <Box><Others /></Box>
                                </Stack>
                            </Stack>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                                <Typography sx= { subtitle }>Account info</Typography>
                                <Box><Account /></Box>
                            </Stack>
                        </Stack>
                    </form>
                </Stack>
                { data.user_level !== 'superadmin' ? <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                    <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                        data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                        data['type'] = 'profile';

                        updating({ table: 'tbl_users', data: data });
                    }) }>Save</Typography>
                </Stack> : '' }
            </Stack>
        </Stack>
    );
}

export default Index;