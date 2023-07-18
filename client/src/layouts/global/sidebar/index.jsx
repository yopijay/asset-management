// Libraries
import { Box } from "@mui/material";

// Components
import Desktop from "./screens/desktop";
import Tablet from "./screens/tablet";
import Mobile from "./screens/mobile";

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