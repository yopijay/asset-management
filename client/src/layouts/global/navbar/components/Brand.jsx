// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import Logo from "assets/images/logo.png"; // Assets
import { title } from "../style"; // Styles

const Brand = () => {
    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
            <img src= { Logo } alt= "logo" width= "40px" />
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "flex-start">
                <Typography sx= { title }>Kenneth Commercial</Typography>
                {/* <Typography variant= "body2" sx= { subtitle }>Kay Cheryl</Typography> */}
            </Stack>
        </Stack>
    );
}

export default Brand;