import { Box, Container, Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { GlobalCntxt } from "core/context/Global"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import Picture from "./components/Picture";
import Name from "./components/Name";
import Others from "./components/Others";
import Account from "./components/Account";
import { savebtn, subtitle, title } from "./style";

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
    const { data } = useContext(AccountCntxt);
    const { setactive } = useContext(GlobalCntxt);
    const { handleSubmit, setValue } = useContext(FormCntxt);

    useEffect(() => {
        let _data = Object.keys(data);

        document.title = 'KC | Profile';
        setactive('profile');
        localStorage.setItem('nav', 'profile');
        
        for(let count = 0; count < _data.length; count++) { setValue(_data[count], data[_data[count]]); }
    }, [ data, setValue, setactive ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 5 } sx= { container }>
            <Container maxWidth= "lg">
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" 
                    sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, width: '100%', paddingBottom: '50px' }} spacing= { 5 }>
                    <Typography sx= { title }>Account Settings</Typography>
                    <form autoComplete= "off">
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 } width= "100%">
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
                            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                                <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                                    
                                    console.log(data);
                                    // if(type === 'new') { saving({ table: 'tbl_company', data: data }); }
                                    // else { updating({ table: 'tbl_company', data: data }); }
                                }) }>Save</Typography>
                            </Stack>
                        </Stack>
                    </form>
                </Stack>
            </Container>
        </Stack>
    );
}

export default Index;