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
            <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                malesuada quam ut, vulputate massa.</Typography>
        </Stack>
    );
}

export default Welcome;