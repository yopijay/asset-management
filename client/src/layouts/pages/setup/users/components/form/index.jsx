// Libraries
import { Stack, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { save, specific, update } from "core/api"; // API
import { successToast, useGet, usePost } from "core/function/global"; // Function
import { IMAGE } from "core/constants/Global"; // Constants

import { cancelbtn, card, content, savebtn, title } from "./style";
import Account from "./layouts/account";
import Employee from "./layouts/employee";
import Personal from "./layouts/personal";

import { cvalidation, validation } from "./validation";

const Index = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { handleSubmit, register, errors, control, setValue, getValues, setValidation, setError, reset } = useContext(FormCntxt);
    const { isFetching, refetch } = 
        useGet({ key: ['usr_specific'], request: specific({ table: 'tbl_users', id: id ?? null }), options: { enabled: type !== 'new', refetchOnWindowFocus: false },
            onSuccess: data => {
                if(Array.isArray(data)) 
                    for(let count = 0; count < Object.keys(data[0]).length; count++) { 
                        let _name = Object.keys(data[0])[count];
                        setValue(_name, _name === 'status' ? data[0][_name] === 1 : data[0][_name]);
                    }
            }
        });

    const { mutate: saving } = 
        usePost({ request: save,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/setup/users', { replace: true })); }
            }
        });

    const { mutate: updating } =
        usePost({ request: update,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/setup/users', { replace: true })); }
            }
        });

    useEffect(() => { 
        register('profile'); setValidation(validation()); reset(); 
        if(id !== undefined) { refetch() }
        else { setValue('branch', ''); setValue('gender', ''); setValue('user_level', 'user'); setValue('employment_status', ''); setValue('profile', JSON.stringify(IMAGE)); } 
    }, [ register, reset, setValidation, id, refetch, setValue ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 } sx= { content }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } User</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card }>
                <form autoComplete= "off">
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                            <Typography color= "#9BA4B5">Account details</Typography>
                            <Account register= { register } fetching= { isFetching } errors= { errors } setValue= { setValue } setError= { setError } getValues= { getValues } />
                        </Stack>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                            <Typography color= "#9BA4B5">Employee details</Typography>
                            <Employee register= { register } control= { control } fetching= { isFetching } errors= { errors } setValue= { setValue } setError= { setError } getValues= { getValues } />
                        </Stack>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                            <Typography color= "#9BA4B5">Personal details</Typography>
                            <Personal register= { register } control= { control } fetching= { isFetching } errors= { errors } setValue= { setValue } setError= { setError } getValues= { getValues } />
                        </Stack>
                    </Stack>
                </form>
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/setup/users">Cancel</Typography>
                { type !== 'view' ? <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    let errors = [];
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];

                    cvalidation(data, errors, type);
                    if(!(errors.length > 0)) {
                        if(type === 'new') { saving({ table: 'tbl_users', data: data }); }
                        else { updating({ table: 'tbl_users', data: data }); }
                    }
                    else { errors.forEach(data => setError(data.name, { message: data.message })); }
                }) }>Save</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Index;