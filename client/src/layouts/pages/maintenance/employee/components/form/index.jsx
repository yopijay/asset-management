// Libraries
import { Stack, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Provider
import { successToast, useGet, usePost } from "core/function/global"; // Function
import { save, specific, update } from "core/api"; // API

// Components
import Account from "./components/Account";
import Personal from "./components/Personal";
import Employee from "./components/Employee";

// Constants
import { cancelbtn, card, content, savebtn, title } from "./index.style"; // Styles
import { validation } from "../../index.validation"; // Validation

const Index = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { handleSubmit, setValue, setError, setValidation } = useContext(FormCntxt);
    const { isFetching, refetch } = 
        useGet({ key: ['emp_specific'], request: specific({ table: 'tbl_users', id: id ?? null }), options: { enabled: type !== 'new', refetchOnWindowFocus: false },
            onSuccess: data => {
                if(Array.isArray(data)) 
                    for(let count = 0; count < Object.keys(data[0]).length; count++) { 
                        let _name = Object.keys(data[0])[count];
                        setValue(_name, _name === 'status' ? data[0][_name] === 1 : _name === 'password' ? '' : data[0][_name]);
                    }
            }
        });

    const { mutate: saving } = 
        usePost({ request: save,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/maintenance/employee', { replace: true })); }
            } 
        });

    const { mutate: updating } =
        usePost({ request: update,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/maintenance/employee', { replace: true })); }
            }
        });

    useEffect(() => { setValidation(validation()); if(id !== undefined) refetch() }, [ setValidation, id, refetch ]);

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } Employee</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card } spacing= { 5 }>
                <Account fetching= { isFetching } />
                <Personal fetching= { isFetching } />
                <Employee fetching= { isFetching } />
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/maintenance/employee">Cancel</Typography>
                { type !== 'view' ? <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    let errors = [];
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];

                    if(data.password !== data.confirm_password) { errors.push({ name: 'confirm_password', message: `Password doesn't match!` }); }
                    if(!(data.branch)) { errors.push({ name: 'branch', message: 'This field is requierd!' }); }
                    if(!(data.user_level)) { errors.push({ name: 'user_level', message: 'This field is requierd!' }); }
                    if(!(data.company_id)) { errors.push({ name: 'company_id', message: 'This field is requierd!' }); }
                    if(!(data.department_id)) { errors.push({ name: 'department_id', message: 'This field is requierd!' }); }
                    if(!(data.position_id)) { errors.push({ name: 'position_id', message: 'This field is requierd!' }); }
                    if(!(data.password) && type === 'new') { errors.push({ name: 'password', message: 'This field is required!' }); }
                    if(!(data.confirm_password) && type === 'new') { errors.push({ name: 'confirm_password', message: 'This field is required!' }); }

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