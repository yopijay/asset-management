// Libraries
import { Grid, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { FormCntxt } from "core/context/Form"; // Context

import { input } from "../style";

const Account = () => {
    const { register, errors } = useContext(FormCntxt);
    const [ showpass, setshowpass ] = useState(false);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 12 } sm= { 6 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography gutterBottom variant= "body2" color= "#636e72">*Email</Typography>
                    <TextField { ...register('email') } name= "email" variant= "standard" sx= { input } InputProps= {{ disableUnderline: true }} />
                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.email?.message }</Typography>
                </Stack>
            </Grid>
            <Grid item xs= { 12 } sm= { 6 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography gutterBottom variant= "body2" color= "#636e72">*Password</Typography>
                    <TextField { ...register('password') } name= "password" type= { !showpass ? 'password' : 'text' } variant= "standard"
                            InputProps= {{ disableUnderline: true, 
                                endAdornment: 
                                    <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setshowpass(!showpass) }>
                                        { !showpass ? <FontAwesomeIcon icon= { solid('eye-slash') } color= "#636e72" /> : <FontAwesomeIcon icon= { solid('eye') } color= "#636e72" /> }
                                    </InputAdornment> }} sx= { input } disabled />
                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.password?.message }</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Account;