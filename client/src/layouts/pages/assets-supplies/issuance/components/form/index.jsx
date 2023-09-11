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
import Classification from "./classifications"; // Classification
import Issuance from "../../issuance"; // Fields
import Employee from "../../employee"; // Fields
import { validation } from "../../index.validation"; // Validation

const Index = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { handleSubmit, setValue, setError, setValidation, reset } = useContext(FormCntxt);
    const { isFetching, refetch } = 
        useGet({ key: ['assts_specific'], request: specific({ table: 'tbl_assets', id: id ?? null }), options: { enabled: type !== 'new', refetchOnWindowFocus: false },
            onSuccess: data => {
                if(Array.isArray(data)) {
                    for(let count = 0; count < Object.keys(data[0]).length; count++) { 
                        let _name = Object.keys(data[0])[count];
                        setValue(_name, 
                            _name === 'status' || _name === 'hdmi' || _name === 'vga' || _name === 'dvi' || _name === 'bluetooth' || _name === 'fingerprint' ||
                            _name === 'webcam' || _name === 'backlit_keyboard' ? 
                                data[0][_name] === 1 : data[0][_name]);
                    }
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
                <FormBuilder fields= { Issuance({ fetching: isFetching }) } />
                <Classification />
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                    <Typography variant= "body2" color= "#9BA4B5">Employee:</Typography>
                    <FormBuilder fields= { Employee({ fetching: isFetching }) } />
                </Stack>
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/assets-supplies/issuance">Cancel</Typography>
                { type !== 'view' ? <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    let errors = [];
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];

                    if(data.category === undefined) { errors.push({ name: 'category', message: 'This field is required!' }); }
                    if(data.type === undefined) { errors.push({ name: 'type', message: 'This field is required!' }); }
                    if(data.brand_id === undefined) { errors.push({ name: 'brand_id', message: 'This field is required!' }); }
                    if(data.item_id === undefined) { errors.push({ name: 'item_id', message: 'This field is required!' }); }
                    if(data.company_id === undefined) { errors.push({ name: 'company_id', message: 'This field is required!' }); }
                    if(data.department_id === undefined) { errors.push({ name: 'department_id', message: 'This field is required!' }); }
                    if(data.position_id === undefined) { errors.push({ name: 'position_id', message: 'This field is required!' }); }
                    if(data.issued_to === undefined) { errors.push({ name: 'issued_to', message: 'This field is required!' }); }
                    if(data.date_issued === '') { errors.push({ name: 'date_issued', message: 'This field is required!' }); }
                    
                    if(!(errors.length > 0)) {
                        if(type === 'new') { saving({ table: 'tbl_issuance', data: data }); }
                        else { updating({ table: 'tbl_issuance', data: data }); }
                    }
                    else { errors.forEach(data => setError(data.name, { message: data.message })); }
                }) }>Save</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Index;