// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { successToast, useGet, usePost } from "core/function/global"; // Function
import { save, specific, update } from "core/api"; // API
import FormBuilder from "core/components/form"; // Form Builder

import { cancelbtn, card, content, savebtn, title } from "./style";
import Fields from "./fields";
import Category from "./layout/Category";
import { validation } from "./validation";

const Index = () => {
    const { type, category, id } = useParams();
    const navigate = useNavigate();
    const { data } = useContext(AccountCntxt);
    const { handleSubmit, setError, register, errors, control, setValue, getValues, reset } = useContext(FormCntxt);
    const { isFetching, refetch } = 
        useGet({ key: ['stck_specific'], request: specific({ table: 'tbl_stocks', id: id ?? null }), options: { enabled: type !== 'new', refetchOnWindowFocus: false },
            onSuccess: data => {
                if(Array.isArray(data)) 
                    for(let count = 0; count < Object.keys(data[0]).length; count++) { 
                        let _name = Object.keys(data[0])[count];
                        setValue(_name, _name === 'hdmi' || _name === 'vga' || _name === 'dvi' || _name === 'bluetooth' || _name === 'wifi' ||
                                        _name === 'fingerprint' || _name === 'camera' ? 
                                        data[0][_name] === 1 : _name === 'category' ? ((data[0][_name]).replace(' ', '_')).toLowerCase() : data[0][_name]);
                    }
            } 
        });

    const { mutate: saving } = 
        usePost({ request: save,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate(`/assets/stocks/${category}`, { replace: true })); }
            } 
        });

    const { mutate: updating } =
        usePost({ request: update,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate(`/assets/stocks/${category}`, { replace: true })); }
            }
        });
    
    useEffect(() => { 
        reset(); 
        if(data.user_level !== 'superadmin' && 
            (data.permission === null || 
                !(JSON.parse(data.permission).assets.stocks.create || 
                    JSON.parse(data.permission).assets.stocks.update || 
                    JSON.parse(data.permission).assets.stocks.view))) { navigate('/'); }
        else { if(id !== undefined) refetch(); }
    }, [ category, data, navigate, reset, id, refetch ]);

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } { (category?.charAt(0).toUpperCase() + category?.slice(1))?.replace('-', ' ') }</Typography>
                <Typography variant= "caption" color= "#b2bec3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card } spacing= { 3 }>
                <Box>
                    <form autoComplete= "off">
                        <FormBuilder fields= { Fields({ register: register, fetching: isFetching, errors: errors, control: control, setValue: setValue, getValues: getValues, setError: setError }) } />
                    </form>
                </Box>
                <Box>
                    <form autoComplete= "off">
                        <Category register= { register } fetching= { isFetching } errors= { errors } control= { control } setValue= { setValue } getValues= { getValues } setError= { setError } type= { type } />
                    </form>
                </Box>
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= { `/assets/stocks/${category}` }>Cancel</Typography>
                { type !== 'view' ? <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    let errors = [];
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                    
                    validation(data, errors);
                    if(!(errors.length > 0)) {
                        if(type === 'new') { saving({ table: 'tbl_stocks', data: data }); }
                        else { updating({ table: 'tbl_stocks', data: data }); }
                    }
                    else { errors.forEach(err => setError(err.name, { message: err.message })); }
                }) }>Save</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Index;