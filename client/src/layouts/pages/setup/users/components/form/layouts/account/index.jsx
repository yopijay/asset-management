// Libraries
import { Avatar, FormLabel, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { base64 } from "core/function/global"; // Function
import { IMAGE } from "core/constants/Global"; // Constants

import { btn, input } from "./style";

const Index = props => {
    const { register, fetching, errors, setValue, setError, getValues } = props;
    const role = JSON.parse(atob((sessionStorage.getItem('token')).split('.')[1])).role;
    const { type } = useParams();
    const [ pic, setPic ] = useState(IMAGE);
    const [ showpass, setshowpass ] = useState(false);
    const [ showcpass, setshowcpass ] = useState(false);
    
    useEffect(() => { 
        if(!fetching) { setPic(getValues()?.profile !== undefined ? JSON.parse(getValues()?.profile) : IMAGE); } 
    }, [ fetching, getValues, register ]);

    return (
        <Stack direction= {{ xs: 'column', md: 'row' }} justifyContent= "flex-start" alignItems= {{ xs: 'stretch', md: 'center' }} spacing= { 2 }>
            <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= {{ width: { xs: '100%', md: '35%', lg: '50%' } }} spacing= { 1 }>
                <Avatar src= { pic } sx= {{ width: '170px', height: '170px', border: 'solid 5px #dfe4ea' }} />
                { type !== 'view' ? <FormLabel htmlFor= "profile" sx= { btn }>Upload your photo</FormLabel> : '' }
                <input type= "file" name= "profile" id= "profile" style= {{ width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 }}
                    onChange= { async (e) => {
                        setError('profile', { message: '' });
                        let file = e.target.files[0];
                        let image = await base64(file);
                        
                        setPic(image);
                        setValue('profile', JSON.stringify(image));
                    }} />
                <Typography variant= "caption" color= "error.dark">{ errors.profile?.message }</Typography>
            </Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }  sx= {{ width: { xs: '100%', md: '65%', lg: '50%' } }}>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography gutterBottom variant= "body2" color= "#394867">*Email</Typography>
                        <TextField { ...register('email') } name= "email" variant= "standard" sx= { input } InputProps= {{ disableUnderline: true }} />
                        <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.email?.message }</Typography>
                </Stack>
                { !(role === 'superadmin' || role === 'admin') || type === 'new' ? <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography gutterBottom variant= "body2" color= "#394867">*Password</Typography>
                    <TextField { ...register('password') } name= "password" type= { !showpass ? 'password' : 'text' } variant= "standard" defaultValue= "@KC12345"
                            InputProps= {{ disableUnderline: true, 
                                endAdornment: 
                                    <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setshowpass(!showpass) }>
                                        { !showpass ? <FontAwesomeIcon icon= { solid('eye-slash') } color= "#394867" /> : <FontAwesomeIcon icon= { solid('eye') } color= "#394867" /> }
                                    </InputAdornment> }} sx= { input } />
                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.password?.message }</Typography>
                </Stack> : '' }
                { !(role === 'superadmin' || role === 'admin') || type === 'new' ? <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography gutterBottom variant= "body2" color= "#394867">*Confirm Password</Typography>
                    <TextField { ...register('cpassword') } name= "cpassword" type= { !showcpass ? 'password' : 'text' } variant= "standard" defaultValue= "@KC12345"
                            InputProps= {{ disableUnderline: true, 
                                endAdornment: 
                                    <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setshowcpass(!showcpass) }>
                                        { !showcpass ? <FontAwesomeIcon icon= { solid('eye-slash') } color= "#394867" /> : <FontAwesomeIcon icon= { solid('eye') } color= "#394867" /> }
                                    </InputAdornment> }} sx= { input } />
                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}>{ errors.cpassword?.message }</Typography>
                </Stack> : '' }
            </Stack>
        </Stack>
    );
}

export default Index;