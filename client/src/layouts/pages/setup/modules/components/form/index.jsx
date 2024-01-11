// Libraries
import { Stack, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import FormBuilder from "core/components/form"; // Form Builder
import { successToast, useGet, usePost } from "core/function/global"; // Function
import { save, specific, update } from "core/api"; // APIs

import { cancelbtn, card, content, savebtn, title } from "./style"; // Styles
import Fields from "./fields"; // Fields
import { validation } from "./validation"; // Form validation

const Index = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { handleSubmit, register, errors, control, setValue, getValues, setValidation, setError, reset } = useContext(FormCntxt);
    const { isFetching, refetch } = 
        useGet({ key: ['mdl_specific'], request: specific({ table: 'tbl_modules', id: id ?? null }), options: { enabled: type !== 'new', refetchOnWindowFocus: false },
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
                else { successToast(data.message, 3000, navigate('/setup/modules', { replace: true })); }
            } 
        });

    const { mutate: updating } =
        usePost({ request: update,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/setup/modules', { replace: true })); }
            }
        });

    useEffect(() => { reset(); setValidation(validation()); if(id !== undefined) refetch() }, [ reset, setValidation, id, refetch ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 } sx= { content }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } Module</Typography>
                <Typography variant= "caption" color= "#b2bec3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card }>
                <form autoComplete= "off">
                    <FormBuilder fields= { 
                        Fields({ 
                            register: register, 
                            fetching: isFetching, 
                            errors: errors, 
                            control: control, 
                            setValue: setValue, 
                            setError: setError,
                            getValues: getValues }) } />
                </form>
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: type === 'view' ? 'flex-end' : 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/setup/modules">Cancel</Typography>
                { type !== 'view' ? <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    let errors = [];
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                    
                    if(!data.route_id) { errors.push({ name: 'route_id', message: 'This field is required!' }); }

                    if(!(errors.length > 0)) {
                        if(type === 'new') { saving({ table: 'tbl_modules', data: data }); }
                        else { updating({ table: 'tbl_modules', data: data }); }
                    }
                    else { errors.forEach(data => setError(data.name, { message: data.message })); }
                }) }>Save</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Index;