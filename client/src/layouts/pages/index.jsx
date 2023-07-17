// Libraries
import { Box } from "@mui/material";

// Screen sizes
import Mobile from "layouts/pages/screens/mobile";
import Tablet from "layouts/pages/screens/tablet";
import Desktop from "layouts/pages/screens/desktop";

const Index = () => {
    return (
        <Box>
            <Box sx= {{ display: { xs: 'block', sm: 'none', transition: 'all 0.2s ease-in-out' } }}><Mobile /></Box>
            <Box sx= {{ display: { xs: 'none', sm: 'block', lg: 'none', transition: 'all 0.2s ease-in-out' } }}><Tablet /></Box>
            <Box sx= {{ display: { xs: 'none', lg: 'block', transition: 'all 0.2s ease-in-out' } }}><Desktop /></Box>
        </Box>
    );
}

export default Index;