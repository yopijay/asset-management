// Libraries
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { successToast, usePost } from "core/function/global"; // Function
import { update } from "core/api"; // API

import { card, content, input, savebtn, title } from "./style";

// Custom styles
const container = {
    width: '100%',
    height: '100vh',
    padding: {
        xs: '80px 0 20px 0',
        lg: '100px 20px 20px 20px'
    },
    overflow: 'hidden'
}

const Index = () => {
    const { handleSubmit, register, errors, setError } = useContext(FormCntxt);
    const navigate = useNavigate();
    const [ showcurrpass, setshowcurrpass ] = useState(false);
    const [ shownewpass, setshownewpass ] = useState(false);
    const [ showcpass, setshowcpass ] = useState(false);

    const { mutate: updating } =
        usePost({ request: update,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/profile', { replace: true })); }
            }
        });

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { container }>
            <Stack sx= { content } spacing= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography sx= { title }>Change password</Typography>
                    <Typography variant= "caption" color= "#b2bec3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                        malesuada quam ut, vulputate massa.</Typography>
                </Stack>
                <Stack sx= { card }>
                    <form autoComplete= "off">
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography gutterBottom variant= "body2" color= "#636e72">*Current password</Typography>
                                <TextField { ...register('currpassword') } name= "currpassword" type= { !showcurrpass ? 'password' : 'text' } variant= "standard"
                                        InputProps= {{ disableUnderline: true, 
                                            endAdornment: 
                                                <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setshowcurrpass(!showcurrpass) }>
                                                    { !showcurrpass ? <FontAwesomeIcon icon= { solid('eye-slash') } color= "#636e72" /> : <FontAwesomeIcon icon= { solid('eye') } color= "#636e72" /> }
                                                </InputAdornment> }} sx= { input } />
                                <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.currpassword?.message }</Typography>
                            </Stack>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Typography gutterBottom variant= "body2" color= "#636e72">*New password</Typography>
                                    <TextField { ...register('newpassword') } name= "newpassword" type= { !shownewpass ? 'password' : 'text' } variant= "standard"
                                            InputProps= {{ disableUnderline: true, 
                                                endAdornment: 
                                                    <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setshownewpass(!shownewpass) }>
                                                        { !shownewpass ? <FontAwesomeIcon icon= { solid('eye-slash') } color= "#636e72" /> : <FontAwesomeIcon icon= { solid('eye') } color= "#636e72" /> }
                                                    </InputAdornment> }} sx= { input } />
                                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.newpassword?.message }</Typography>
                                </Stack>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Typography gutterBottom variant= "body2" color= "#636e72">*Confirm password</Typography>
                                    <TextField { ...register('cpassword') } name= "cpassword" type= { !showcpass ? 'password' : 'text' } variant= "standard"
                                            InputProps= {{ disableUnderline: true, 
                                                endAdornment: 
                                                    <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setshowcpass(!showcpass) }>
                                                        { !showcpass ? <FontAwesomeIcon icon= { solid('eye-slash') } color= "#636e72" /> : <FontAwesomeIcon icon= { solid('eye') } color= "#636e72" /> }
                                                    </InputAdornment> }} sx= { input } />
                                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.cpassword?.message }</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </form>
                </Stack>
                <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                    <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                        let _errors = [];
                        data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                        data['type'] = 'password';

                        if(data.currpassword === '') { _errors.push({ name: 'currpassword', message: 'This field is required!' }); }
                        if(data.newpassword === '') { _errors.push({ name: 'newpassword', message: 'This field is required!' }); }
                        if(data.cpassword !== data.newpassword) { _errors.push({ name: 'cpassword', message: 'Password doesn`t match!' }); }

                        if(!(_errors.length > 0)) { updating({ table: 'tbl_users', data: data }); }
                        else { _errors.forEach(err => setError(err.name, { message: err.message })); }
                    }) }>Save</Typography>
                </Stack>
            </Stack>
        </Stack>        
    );
}

export default Index;