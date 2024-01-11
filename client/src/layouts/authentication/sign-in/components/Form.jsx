// Libraries
import { useContext, useEffect, useState } from "react";
import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { usePost } from "core/function/global"; // Function
import { authentication } from "core/api"; // API

// Constants
import { input, btn, title } from "../style"; // Styles
import { validation } from "./validation"; // Validation

const Form = () => {
    const [ show, setshow ] = useState();
    const { handleSubmit, setValidation, errors, register, setError } = useContext(FormCntxt);
    const { mutate: signin } = usePost({ request: authentication, 
        onSuccess: data => { 
            if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0}) ); }
            else { sessionStorage.setItem('token', data.token); window.location.href = '/'; }
        } 
    });

    useEffect(() => { setValidation(validation()); }, [ setValidation ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>Welcome!</Typography>
                <Typography variant= "body2" color= "#fab1a091">Login to continue using the app.</Typography>
            </Stack>
            <form autoComplete= "off">
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                        <Typography gutterBottom variant= "body2" color= "#636e72">*Email</Typography>
                        <TextField { ...register('email') } name= "email" variant= "standard" InputProps= {{ disableUnderline: true }} sx= { input } />
                        <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.email?.message }</Typography>
                    </Stack>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                        <Typography gutterBottom variant= "body2" color= "#636e72">*Password</Typography>
                        <TextField { ...register('password') } name= "password" type= { !show ? 'password' : 'text' } variant= "standard" 
                                InputProps= {{ disableUnderline: true, 
                                    endAdornment: 
                                        <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setshow(!show) }>
                                            { !show ? <FontAwesomeIcon icon= { solid('eye-slash') } color= "#636e72" /> : <FontAwesomeIcon icon= { solid('eye') } color= "#636e72" /> }
                                        </InputAdornment> }} sx= { input } />
                        <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.password?.message }</Typography>
                    </Stack>
                </Stack>
            </form>
            <Box sx= { btn } onClick= { handleSubmit(data => signin(data)) }>Login</Box>
        </Stack>
    );
}

export default Form;