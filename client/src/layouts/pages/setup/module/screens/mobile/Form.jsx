// Libraries
import { Stack, ThemeProvider, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Provider
import { Components } from "core/theme"; // Theme
import FormBuilder from "core/components/form"; // Form Builder
import { successToast, useGet, usePost } from "core/function/global"; // Function
import { save, specific, update } from "core/api"; // API

// Constants
import { cancelbtn, card, content, input, savebtn, title } from "./index.style"; // Styles
import { validation } from "../../index.validation"; // Validations
import Module from "../../module"; // Fields

const Form = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { setValidation, handleSubmit, setValue, setError } = useContext(FormCntxt);
    const { isFetching, refetch } = 
        useGet({ key: ['mdl_specific'], request: specific({ table: 'tbl_module', id: id ?? null }), options: { enabled: type !== 'new', refetchOnWindowFocus: false },
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
                else { successToast(data.message, 3000, navigate('/setup/module', { replace: true })); }
            } 
        });

    const { mutate: updating } =
        usePost({ request: update,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/setup/module', { replace: true })); }
            }
        });

    useEffect(() => { setValidation(validation()); if(id !== undefined) refetch() }, [ setValidation, id, refetch ]);

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } Module</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <ThemeProvider theme= { Components(input) }>
                <Stack sx= { card }><FormBuilder fields= { Module({ fetching: isFetching }) } /></Stack>
            </ThemeProvider>
            <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/setup/module">Cancel</Typography>
                <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];

                    if(type === 'new') { saving({ table: 'tbl_module', data: data }); }
                    else { updating({ table: 'tbl_module', data: data }); }
                }) }>Save</Typography>
            </Stack>
        </Stack>
    );
}

export default Form;