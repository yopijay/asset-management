// Libraries
import { useState } from "react";
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Constants
import { input, btn, title } from "../index.style"; // Styles

const Form = () => {
    const [ show, setshow ] = useState();

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>Welcome!</Typography>
                <Typography variant= "body2" color= "#C4D7B2">Login to continue using the app.</Typography>
            </Stack>
            <form autoComplete= "off">
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                        <Typography gutterBottom variant= "body2" color= "#9BA4B5">*Email</Typography>
                        <TextField name= "email" variant= "standard" InputProps= {{ disableUnderline: true }} sx= { input } />
                        <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}></Typography>
                    </Stack>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                        <Typography gutterBottom variant= "body2" color= "#9BA4B5">*Password</Typography>
                        <TextField name= "password" type= { !show ? 'password' : 'text' } variant= "standard" 
                                InputProps= {{ disableUnderline: true, 
                                    endAdornment: 
                                        <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setshow(!show) }>
                                            { !show ? <FontAwesomeIcon icon= { solid('eye-slash') } color= "#9BA4B5" /> : <FontAwesomeIcon icon= { solid('eye') } color= "#9BA4B5" /> }
                                        </InputAdornment> }} sx= { input } />
                        <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}></Typography>
                    </Stack>
                </Stack>
            </form>
            <Box sx= { btn }>Login</Box>
        </Stack>
    );
}

export default Form;