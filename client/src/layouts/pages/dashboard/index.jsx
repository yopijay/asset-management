// Libraries
import { Stack } from "@mui/material";
import { useContext } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context

// Components
import Welcome from "./components/Welcome";
import Summary from "./components/Summary";
import Stocks from "./components/Stocks";

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
    const { data } = useContext(AccountCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { container } spacing= { 4 }>
            <Welcome />
            { data.user_level === 'superadmin' || (data.user_level !== 'superadmin' && data.permission !== null) ? 
                <Stack direction= "column" justifyContent= "flex-start" alignItems ="stretch" spacing= { 2 }>
                    <Summary />
                    <Stocks />
                </Stack> : '' }
        </Stack>
    );
}

export default Index;