// Libraires
import { Container, Stack } from "@mui/material";

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

const Index = () => {
    return (
        <Container maxWidth= "xl">
            <Navbar />
            <Stack sx= { container } spacing= { 1 }>
                <Sidebar />
            </Stack>
        </Container>
    );
}

export default Index;