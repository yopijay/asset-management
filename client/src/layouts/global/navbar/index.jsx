// Libraries
import { useContext } from "react";
import { AppBar, Container, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { GlobalCntxt } from "core/context/Global"; // Context

// Components
import Brand from "./components/Brand";

// Constants
import { container, menu } from "./index.style"; // Styles

const Index = () => {
    const { drawerToggle, open } = useContext(GlobalCntxt);

    return (
        <AppBar sx= { container } position= "fixed">
            <Container maxWidth= "xl">
                <Stack direction= "row" justifyContent= "space-between" alignItems= "center" padding= "8px 0">
                    <Brand />
                    <Typography color= "text.primary" sx= { menu } onClick= { drawerToggle(!open.left) }>
                        <FontAwesomeIcon icon={ solid('bars-staggered') } />
                    </Typography>
                </Stack>
            </Container>
        </AppBar>
    );
}

export default Index;