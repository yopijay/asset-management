// Libraries
import { Box } from "@mui/material";
import Logo from 'assets/images/logo.png'; // Assets
 
const Screen = () => { 
    return ( 
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            <img alt= "logo" src= { Logo } width= "40px" height= "auto" />
        </Box> 
    ); 
}

export default Screen;