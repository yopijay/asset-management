import { Box, Stack, Typography } from "@mui/material";

// Core
import { FormPrvdr } from "core/context/Form"; // Provider

import Picture from "./components/Picture";
import { subtitle, title } from "./style";
import Name from "./components/Name";
import Others from "./components/Others";
import Account from "./components/Account";

// Custom styles
const container = {
    width: '100%',
    height: '100vh',
    padding: {
        xs: '80px 0 20px 0',
        lg: '100px 20px 20px 20px'
    },
    overflow: 'hidden'
}

const Index = () => {

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 5 } sx= { container }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" 
                sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, width: '100%', paddingBottom: '50px' }} spacing= { 5 }>
                <Typography sx= { title }>Account Settings</Typography>
                <FormPrvdr>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 } width= "100%">
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                            <Typography sx= { subtitle }>Basic info</Typography>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                                <Picture />
                                <Box><Name /></Box>
                                <Box><Others /></Box>
                            </Stack>
                        </Stack>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                            <Typography sx= { subtitle }>Account info</Typography>
                            <Box><Account /></Box>
                        </Stack>
                    </Stack>
                </FormPrvdr>
            </Stack>
        </Stack>
    );
}

export default Index;