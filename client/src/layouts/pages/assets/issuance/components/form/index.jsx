// Libraries
import { Box, Grid, Skeleton, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Provider
import { successToast, useGet, usePost } from "core/function/global"; // Function
import { save, specific, update } from "core/api"; // API

// Constants
import { cancelbtn, card, content, input, savebtn, title } from "./style"; // Styles

import Receiver from "./components/receiver";
import Issuer from "./components/issuer";

const Index = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { handleSubmit, setValue, setError, reset, register, errors } = useContext(FormCntxt);
    const { isFetching, refetch } = 
        useGet({ key: ['cmp_specific'], request: specific({ table: 'tbl_company', id: id ?? null }), options: { enabled: type !== 'new', refetchOnWindowFocus: false },
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
        reset(); 
        if(id !== undefined) refetch(); 
    }, [ reset, id, refetch ]);

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type === 'new' ? 'Issue an item' : 'Update issued item' }</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card }>
                <form autoComplete= "off">
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
                            <Grid item xs= { 12 } md= { 4 }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Typography variant= "body2" gutterBottom color= "#394867">*Series no.</Typography>
                                    { isFetching ? <Skeleton variant= "rounded" height= "35px" /> : 
                                        <TextField name= "series_no" { ...register('series_no') } variant= "standard" disabled sx= { input } InputProps= {{ disableUnderline: true }} type= { type } /> }
                                    <Typography variant= "body2" color= "error.dark">{ errors.series_no?.message }</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Receiver />
                        <Issuer />
                    </Stack>
                    {/* <FormBuilder fields= { Fields({ register: register, fetching: isFetching, errors: errors, control: control, setValue: setValue, getValues: getValues }) } /> */}
                </form>
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/assets/issuance">Cancel</Typography>
                { type !== 'view' ? <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];
                    
                    if(type === 'new') { saving({ table: 'tbl_company', data: data }); }
                    else { updating({ table: 'tbl_company', data: data }); }
                }) }>Save</Typography> : '' }
            </Stack>
        </Stack>
    );
}

export default Index;