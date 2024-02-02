// Libraries
import { Stack } from "@mui/material";
import { useContext } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context

// Components
import Welcome from "./components/Welcome";
import Summary from "./components/Summary";
// import Stocks from "./components/Stocks";
// import Users from "./components/Users";

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
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { container } spacing= { 3 }>
            <Welcome />
            {/* { data.user_level === 'superadmin' || (data.user_level !== 'superadmin' && data.permission !== null) ? 
                <Stack direction= "column" justifyContent= "flex-start" alignItems ="stretch" spacing= { 5 } sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                    { (data.user_level === 'superadmin' || ((JSON.parse(data.permission)).assets?.products?.list ?? false) || 
                        ((JSON.parse(data.permission)).assets?.stocks?.list ?? false) || 
                        ((JSON.parse(data.permission)).setup?.users?.list ?? false)) ?
                        <Summary /> : '' }
                    <Stocks />
                    <Users />
                </Stack> : '' } */}
        </Stack>
    );
}

export default Index;