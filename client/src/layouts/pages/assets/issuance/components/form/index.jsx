// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { FormCntxt } from "core/context/Form"; // Provider
import { successToast, useGet, usePost } from "core/function/global"; // Function
import { save, specific, update } from "core/api"; // API
import FormBuilder from "core/components/form"; // Form Builder

// Constants
import { cancelbtn, card, content, savebtn, title } from "./style"; // Styles
import Fields from "./field";
import Category from "./layout/Category";
import Series from "./layout/Series";
import { cvalidation } from "./validation";

const Index = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { data } = useContext(AccountCntxt);
    const { handleSubmit, control, setValue, setError, reset, register, errors, getValues } = useContext(FormCntxt);
    const { isFetching, refetch } = 
        useGet({ key: ['iss_specific'], request: specific({ table: 'tbl_stocks_issuance', id: id ?? null }), options: { enabled: type !== 'new', refetchOnWindowFocus: false },
            onSuccess: data => {
                if(Array.isArray(data)) 
                    for(let count = 0; count < Object.keys(data[0]).length; count++) { 
                        let _name = Object.keys(data[0])[count];
                        setValue(_name, _name === 'status' ? 
                                        data[0][_name] === 1 :    
                                        _name === 'category' ? ((data[0][_name]).replace(' ', '_')).toLowerCase() : data[0][_name]);
                    }
            } 
        });

    const { mutate: saving } = 
        usePost({ request: save,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/assets/issuance', { replace: true })); }
            } 
        });

    const { mutate: updating } =
        usePost({ request: update,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/assets/issuance', { replace: true })); }
            }
        });

    useEffect(() => {
        if(data.user_level !== 'superadmin' && 
            (data.permission === null || 
                !(JSON.parse(data.permission).assets.issuance.create || 
                    JSON.parse(data.permission).assets.issuance.update || 
                    JSON.parse(data.permission).assets.issuance.view))) { navigate('/'); }
        else { reset();  if(id !== undefined) refetch(); }
    }, [ data, navigate, reset, id, refetch ]);

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type === 'new' ? 'Issue an item' : 'Update issued item' }</Typography>
                <Typography variant= "caption" color= "#b2bec3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card }>
                <form autoComplete= "off">
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Box><Series fetching= { isFetching } register= { register } type= { type } errors= { errors } setValue= { setValue } /></Box>
                        <Box><FormBuilder fields= { Fields({ register: register, fetching: isFetching, errors: errors, control: control, setValue: setValue, getValues: getValues, setError: setError }) } /></Box>
                        <Box><Category  register= { register } fetching= { isFetching } errors= { errors } control= { control } setValue= { setValue } getValues= { getValues } setError= { setError } /></Box>
                    </Stack>
                </form>
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/assets/issuance">Cancel</Typography>
                { type !== 'view' ? <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    let errors = [];
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                    
                    cvalidation(data, errors, type);
                    if(!(errors.length > 0)) {
                        if(type === 'new') { saving({ table: 'tbl_stocks_issuance', data: data }); }
                        else { data['id'] = id; updating({ table: 'tbl_stocks_issuance', data: data }); }
                    }
                    else { errors.forEach(data => setError(data.name, { message: data.message })); }
                }) }>Save</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Index;