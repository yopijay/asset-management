// Libraries
import { Avatar, Stack, Typography } from "@mui/material";

const Account = () => {
    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
            <Avatar variant= "rounded" />
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography>Paul John Judan</Typography>
                <Typography variant= "caption">IT Programmer</Typography>
            </Stack>
        </Stack>
    );
}

export default Account;