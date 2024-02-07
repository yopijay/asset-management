// Libraries
import { Grid, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import { input } from "../style";

const Account = () => {
    const { data } = useContext(AccountCntxt);
    const { register, errors } = useContext(FormCntxt);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 12 } sm= { 6 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography gutterBottom variant= "body2" color= "#636e72">*Email</Typography>
                    <TextField { ...register('email') } name= "email" variant= "standard" sx= { input } InputProps= {{ disableUnderline: true }} disabled= { data.user_level === 'superadmin' } />
                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.email?.message }</Typography>
                    <Typography variant= "body2" sx= {{ textAlign: 'right', textDecoration: 'none', marginTop: '12px' }} 
                        component= { Link } to= "/change-password">Change password</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Account;