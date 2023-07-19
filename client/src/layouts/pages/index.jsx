// Libraries
import { Box, Container, Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

// Core
import { Components } from "core/constants/Navs"; // Constants
import Loader from "core/components/loader/Screen"; // Loader

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
    padding: {
        xs: '80px 0 0 0',
        sm: '90px 0 0 0',
        lg: '100px 0 0 30px'
    },
    overflowY: 'scroll',
    transition: 'all 0.2s ease-in-out',
    '&::-webkit-scrollbar': { display: 'none' }
}

const Index = () => {
    return (
        <Container maxWidth= "xl">
            <Navbar />
            <Stack sx= { container }>
                <Sidebar />
                <Box sx= { content }>
                    <Routes>
                        { Components.map((cmpnts) => (cmpnts.components).map((page, index) => (
                            <Route exact key= { index } path= { page.path } 
                                element= { <Suspense fallback= { <Loader /> }>{ page.component }</Suspense> } />
                        ))) }
                    </Routes>
                </Box>
            </Stack>
        </Container>
        
    );
}

export default Index;