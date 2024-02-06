// Libraries
import { Stack } from "@mui/material";
import { useContext } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { useGet } from "core/function/global"; // Function
import { dashboard } from "core/api"; // API

// Components
import Welcome from "./components/Welcome";
import Summary from "./components/Summary";
import Stocks from "./components/Stocks";
import Users from "./components/Users";

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
    const { data: usr, isFetching: usrfetching } = useGet({ key: ['usrdshbrd'], request: dashboard({ table: 'tbl_users', data: data }), options: { refetchOnWindowFocus: false } });
    const { data: stck, isFetching: stckfetching } = useGet({ key: ['stckdshbrd'], request: dashboard({ table: 'tbl_stocks', data: data }), options: { refetchOnWindowFocus: false } });
    const { data: mdl, isFetching: mdlfetching } = useGet({ key: ['mdldshbrd'], request: dashboard({ table: 'tbl_modules', data: data }), options: { refetchOnWindowFocus: false } });

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { container } spacing= { 3 }>
            <Welcome />
            { data.user_level === 'superadmin' || (data.user_level !== 'superadmin' && data.permission !== null) ? 
                <Stack direction= "column" justifyContent= "flex-start" alignItems ="stretch" spacing= { 5 } sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingBottom: '50px' }}>
                    { data.user_level === 'superadmin' || ((JSON.parse(data.permission)).assets?.products?.list ?? false) ||
                        ((JSON.parse(data.permission)).assets?.stocks?.list ?? false) || ((JSON.parse(data.permission)).setup?.users?.list ?? false) ?
                        <Summary usr= { usr } usrfetching= { usrfetching } stck= { stck } stckfetching= { stckfetching } mdl= { mdl } mdlfetching= { mdlfetching } /> : '' }
                    { data.user_level !== 'user' || ((JSON.parse(data.permission)).setup?.users?.list ?? false) ? <Users usr= { usr } usrfetching= { usrfetching } /> : '' }
                    { data.user_level === 'superadmin' || ((JSON.parse(data.permission)).assets?.stocks?.list ?? false) ? <Stocks stck= { stck } stckfetching= { stckfetching } /> : '' }
                </Stack> : '' }
        </Stack>
    );
}

export default Index;