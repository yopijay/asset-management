// Libraries
import { Container, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Core
import { FormPrvdr } from "core/context/Form"; // Provider

// Components
import Form from "./components/Form";
import OTP from "./components/OTP";

const Index = () => {

    return (
        <Container maxWidth= "xs">
            <Stack direction= "column" justifyContent= "space-between" alignItems= "stretch" sx= {{ height: '100vh', padding: '10px 0' }}>
                <Stack direction= "column" justifyContent= "center" alignItems= "stretch" spacing= { 2 } sx= {{ flexGrow: 1 }}>
                    <Routes>
                        <Route exact path= "/" element= { <FormPrvdr><Form /></FormPrvdr> } />
                        <Route exact path= "/otp" element= { <OTP /> } />
                    </Routes>
                </Stack>
                <Typography variant= "caption" textAlign= "center" color= "#fab1a0">Developed by Paul John Judan</Typography>
            </Stack>
        </Container>
    );
}

export default Index;