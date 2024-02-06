// Libraries
import { Box, Container, Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Suspense, useContext } from "react";

// Core
import { Components } from "core/constants/Navs"; // Constants
import Loader from "core/components/loader/Screen"; // Loader
import { AccountCntxt } from "core/context/Account"; // Context
import { useGet } from "core/function/global"; // Function
import { profile } from "core/api"; // API

// Components
import Navbar from "layouts/global/navbar";
import Sidebar from "layouts/global/sidebar";
import Profile from "layouts/global/profile";
import { FormPrvdr } from "core/context/Form";

// Custom styles
const container = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    overflow: 'hidden'
}

const content = {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    transition: 'all 0.2s ease-in-out'
}

const loader = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    height: '100vh'
}

const Index = () => {
    let _token = sessionStorage.getItem('token').split('.');
    const { setData } = useContext(AccountCntxt);
    const { isFetching } = 
        useGet({ key: ['profile'], request: profile(JSON.parse(atob(_token[1])).id), options: { refetchOnWindowFocus: false }, onSuccess: data => setData(data[0]) });

    return (
        <Container maxWidth= "xl">
            { !isFetching ? 
                <Box>
                    <Navbar />
                    <Stack sx= { container }>
                        <Sidebar />
                        <Box sx= { content }>
                            <Routes>
                                { Components.map((page, index) => (
                                    <Route exact key= { index } path= { `${page.path}/*` } 
                                        element= { <Suspense fallback= { <Box sx= { loader }><Loader /></Box> }>{ page.component }</Suspense> } /> )) }
                                <Route exact path= "/profile" element= { <Suspense fallback= { <Box sx= { loader }><Loader /></Box> }><FormPrvdr><Profile /></FormPrvdr></Suspense> } />
                            </Routes>
                        </Box>
                    </Stack>
                </Box> : 
                <Box sx= { loader }><Loader /></Box> }
        </Container>
        
    );
}

export default Index;