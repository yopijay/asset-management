// Libraries
import { Stack, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Provider
import FormBuilder from "core/components/form"; // Form Builder
import { successToast, useGet, usePost } from "core/function/global"; // Function
import { save, specific, update } from "core/api"; // API

// Constants
import { cancelbtn, card, content, savebtn, title } from "./index.style"; // Styles
import { validation } from "../../index.validation"; // Validation
import Receiver from "../../receiver"; // Fields

const Index = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { handleSubmit, setValue, setError, setValidation, reset } = useContext(FormCntxt);
    const { isFetching, refetch } = 
        useGet({ key: ['iss_specific'], request: specific({ table: 'tbl_stocks_issuance', id: id ?? null }), options: { enabled: type !== 'new', refetchOnWindowFocus: false },
            onSuccess: data => {
                if(Array.isArray(data)) 
                    for(let count = 0; count < Object.keys(data[0]).length; count++) { 
                        let _name = Object.keys(data[0])[count];
                        setValue(_name, _name === 'status' || _name === 'hdmi' || _name === 'vga' || _name === 'dvi' || _name === 'bluetooth' || _name === 'wifi' ||
                                        _name === 'fingerprint' || _name === 'webcam' || _name === 'backlit' ? 
                                        data[0][_name] === 1 : _name === 'category' ? ((data[0][_name]).replace(' ', '_')).toLowerCase() : data[0][_name]);
                    }
            } 
        });

    const { mutate: saving } = 
        usePost({ request: save,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/assets-supplies/issuance', { replace: true })); }
            } 
        });

    const { mutate: updating } =
        usePost({ request: update,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/assets-supplies/issuance', { replace: true })); }
            }
        });

    useEffect(() => { setValidation(validation()); reset(); if(id !== undefined) refetch() }, [ reset, setValidation, id, refetch ]);

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } Issuance</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card } spacing= { 3 }>
                <form autoComplete= "off">
                    <FormBuilder fields= { Receiver({ fetching: isFetching }) } />
                </form>
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/assets-supplies/issuance">Cancel</Typography>
                { type !== 'view' ? <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    let errors = [];
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                    
                    if(!data.category_id) { errors.push({ name: 'category_id', message: 'This field is required!' }) };
                    if(!data.brand_id) { errors.push({ name: 'brand_id', message: 'This field is required!' }) };
                    if(data.category === 'toner') { if(data.model === '') { errors.push({ name: 'model', message: 'This field is required' }); } }
                    if(data.category === 'laptop' || data.category === 'system_unit' || data.category === 'monitor') {
                        if(data.serial_no === '') { errors.push({ name: 'serial_no', message: 'This field is required' }); }
                    }

                    if(!(errors.length > 0)) {
                        if(type === 'new') { saving({ table: 'tbl_stocks_issuance', data: data }); }
                        else { updating({ table: 'tbl_stocks_issuance', data: data }); }
                    }
                    else { errors.forEach(data => setError(data.name, { message: data.message })); }
                }) }>Save</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Index;