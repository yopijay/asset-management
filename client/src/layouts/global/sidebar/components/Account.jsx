// Libraries
import { Avatar, Stack, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context

const Account = () => {
    const { data } = useContext(AccountCntxt);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
            <Avatar variant= "rounded" src= { JSON.parse(data.profile) } />
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ padding: '16px 0' }}>
                <Typography color= "#636e72">{ data.fname } { data.lname }</Typography>
                <Typography variant= "caption" color= "#b2bec3">{ (data.user_level).toUpperCase() }</Typography>
            </Stack>
        </Stack>
    );
}

export default Account;