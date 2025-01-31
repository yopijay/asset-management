// Libraries
import { useEffect } from "react";
import { Box } from "@mui/material";

// Screens
import Mobile from "./screens/mobile";
import Tablet from "./screens/tablet";
import Desktop from "./screens/desktop";

const Index = () => {
    useEffect(() => { document.title = 'KC | Brand' }, []);

    return (
        <Box>
            <Box sx= {{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' }, transition: 'all 0.2s ease-in-out' }}><Mobile /></Box>
            <Box sx= {{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'none' }, transition: 'all 0.2s ease-in-out' }}><Tablet /></Box>
            <Box sx= {{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, transition: 'all 0.2s ease-in-out' }}><Desktop /></Box>
        </Box>
    );
}

export default Index;