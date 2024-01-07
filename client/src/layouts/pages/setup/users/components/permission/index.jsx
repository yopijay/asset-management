// Libraries
import { Stack, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { FormCntxt } from "core/context/Form"; // Context
import { successToast, useGet, usePost } from "core/function/global"; // Function
import { permission, records, specific } from "core/api"; // API

import { cancelbtn, card, content, savebtn, title } from "./style";

import Modules from "./layouts/Modules";
import Setup from "./layouts/Setup";

const Index = () => {
    const { id } = useParams();
    const { data } = useContext(AccountCntxt);
    const navigate = useNavigate();
    const [ modules, setmodules ] = useState([]);
    const [ isdisabled, setDisabled ] = useState({});
    const { handleSubmit, register, control, setValue, getValues, setError, reset } = useContext(FormCntxt);
    const { mutate: record } = usePost({ request: records, onSuccess: data => setmodules(data)});
    const { isFetching } = 
        useGet({ key: ['usr_specific'], request: specific({ table: 'tbl_users', id: id ?? null }), options: { enabled: true, refetchOnWindowFocus: false },
            onSuccess: data => {
                if(Array.isArray(data)) {
                    for(let count = 0; count < Object.keys(data[0]).length; count++) {
                        let _name = Object.keys(data[0])[count];
                        setValue(_name, _name === 'permission' ? JSON.parse(data[0][_name]) : data[0][_name]);
                    }
                    setDisabled({ ...isdisabled, ...data[0].disabled });
                }
            }
        });

    const { mutate: saving } = 
        usePost({ request: permission,
            onSuccess: data => {
                if(data.result === 'error') { (data.error).forEach((err, index) => setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 })); }
                else { successToast(data.message, 3000, navigate('/setup/users', { replace: true })); }
            }
        });

    useEffect(() => { 
        if(data.user_level !== 'superadmin' && 
            (data.permission === null || !JSON.parse(data.permission).setup ||
                !(JSON.parse(data.permission).setup.users.permission))) { navigate('/'); }
        else {
            reset(); 
            register('type', 'with-modules');
            register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });
    
            let data = getValues();
            data['type'] = 'with-modules';
            data['token'] = (sessionStorage.getItem('token')).split('.')[1];
    
            record({ table: 'tbl_routes', data: data });
        }
    }, [ data, navigate, reset, register, getValues, record ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 } sx= { content }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>User Permission</Typography>
                <Typography variant= "caption" color= "#b2bec3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card } spacing= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography color= "#b2bec3">{getValues()?.fname} {getValues()?.lname}</Typography>
                    <Typography color= "#b2bec3" variant= "body2">{getValues()?.employee_no}</Typography>
                </Stack>
                { modules.map((data, index) => 
                    <Modules key= { index } { ...data } 
                        control= { control } fetching= { isFetching } getValues= { getValues } setValue= { setValue } isdisabled= { isdisabled } setDisabled= { setDisabled } /> ) }
                <Setup control= { control } fetching= { isFetching } getValues= { getValues } setValue= { setValue } isdisabled= { isdisabled } setDisabled= { setDisabled } />
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/setup/users">Cancel</Typography>
                <Typography sx= { savebtn } onClick= { handleSubmit(data => {
                    data['token'] = (sessionStorage.getItem('token')).split('.')[1];

                    saving(data);
                }) }>Save</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;