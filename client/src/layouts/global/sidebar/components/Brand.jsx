// Libraries
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Custome style
const brand = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    textDecoration: 'none'
}

const title = {
    color: '#A0C49D',
    fontFamily: 'Montserrat Black',
    fontSize: '1.5rem',
    lineHeight: 1
}

const subtitle = {
    color: '#C4D7B2',
    fontWeight: 'bold'
}

const Brand = () => {
    return (
        <Stack sx= { brand } component= { Link } to= "/" spacing= { 1 }>
            {/* <Typography sx= { title }>GAMS</Typography>
            <Typography sx= { subtitle } variant= "body2">Generic Asset Management System</Typography> */}
        </Stack>
    );
}

export default Brand;