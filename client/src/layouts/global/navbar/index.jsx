// Libraries
import { AppBar, Container, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Components
import Brand from "./components/Brand";

// Constants
import { container, menu } from "./index.style"; // Styles

const Index = () => {
    return (
        <AppBar sx= { container } position= "fixed">
            <Container maxWidth= "xl">
                <Stack direction= "row" justifyContent= "space-between" alignItems= "center" padding= "8px 0">
                    <Brand />
                    <Typography color= "text.primary" sx= { menu }>
                        <FontAwesomeIcon icon={ solid('bars-staggered') } />
                    </Typography>
                </Stack>
            </Container>
        </AppBar>
    );
}

export default Index;