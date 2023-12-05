// Libraries
import { Stack, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

import { cancelbtn, card, content, savebtn, title } from "./style";
import { useContext, useEffect, useState } from "react";
import { FormCntxt } from "core/context/Form";
import { useGet, usePost } from "core/function/global";
import { records, specific } from "core/api";
import Modules from "./layouts/Modules";

const Index = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ modules, setmodules ] = useState([]);
    const { handleSubmit, register, errors, control, setValue, getValues, setValidation, setError, reset } = useContext(FormCntxt);
    const { mutate: record } = usePost({ request: records, onSuccess: data => setmodules(data)});
    const { isFetching } = 
        useGet({ key: ['usr_specific'], request: specific({ table: 'tbl_users', id: id ?? null }), options: { enabled: true, refetchOnWindowFocus: false },
            onSuccess: data => {
                if(Array.isArray(data)) 
                    for(let count = 0; count < Object.keys(data[0]).length; count++) { 
                        let _name = Object.keys(data[0])[count];
                        setValue(_name, _name === 'status' ? data[0][_name] === 1 : data[0][_name]);
                    }
            }
        });

    useEffect(() => { 
        reset(); 
        register('type', 'with-modules');
        register('token', { value: (sessionStorage.getItem('token')).split('.')[1] });

        let data = getValues();
        data['type'] = 'with-modules';
        data['token'] = (sessionStorage.getItem('token')).split('.')[1];

        record({ table: 'tbl_routes', data: data });
    }, [ reset, register, getValues, record ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 } sx= { content }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>User Permission</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card } spacing= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography color= "#9BA4B5">{getValues()?.fname} {getValues()?.lname}</Typography>
                    <Typography color= "#9BA4B5" variant= "body2">{getValues()?.employee_no}</Typography>
                </Stack>
                { modules.map((data, index) => <Modules key= { index } { ...data } form= {{ control: control, fetching: isFetching, setValue: setValue, getValues: getValues }} /> ) }
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= "/setup/users">Cancel</Typography>
                <Typography sx= { savebtn } onClick= { handleSubmit(data => console.log(data)) }>Save</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;