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

// Custom styles
const container = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100vh',
    overflow: 'hidden'
}

const content = {
    width: '100%',
    overflow: 'hidden',
    transition: 'all 0.2s ease-in-out'
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
                                        element= { <Suspense fallback= { <Loader /> }>{ page.component }</Suspense> } />
                                )) }
                            </Routes>
                        </Box>
                    </Stack>
                </Box> : <Loader /> }
        </Container>
        
    );
}

export default Index;