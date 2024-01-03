// Libraries
import { Stack, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context

// Styles
const title = {
    fontFamily: 'Montserrat Black',
    fontSize: '1.17rem',
    color: '#394867',
}

const Welcome = () => {
    const { data } = useContext(AccountCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography sx= { title }>Hi { (data.fname).charAt(0).toUpperCase() + (data.fname).slice(1).toLowerCase() }!</Typography>
        </Stack>
    );
}

export default Welcome;