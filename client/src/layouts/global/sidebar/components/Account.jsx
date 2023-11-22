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
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography>{ data.fname } { data.lname }</Typography>
                <Typography variant= "caption">{ (data.user_level).toUpperCase() }</Typography>
            </Stack>
        </Stack>
    );
}

export default Account;