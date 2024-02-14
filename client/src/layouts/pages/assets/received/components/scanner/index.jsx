// Libraries
import { Stack, Typography } from "@mui/material";
import { QrReader } from "react-qr-reader";
import { Link, useNavigate } from "react-router-dom";

// Core
import { scan } from "core/api"; // API
import { errorToast, successToast, usePost } from "core/function/global"; // Function

// Components
import Title from "./components/Title";

import { cancelbtn } from "./style";

const Index = () => {
    const navigate = useNavigate();

    const { mutate: scanned } = 
        usePost({ request: scan, 
            onSuccess: data => {
                switch(data.result) {
                    case 'success': navigate(`/assets/received/form/update/${data.id}`); break;
                    case 'received': successToast(data.message, 3000, navigate(`/assets/received/form/scan`, { replace: true })); break;
                    default: errorToast(data.message, 3000, navigate(`/assets/received/form/scan`, { replace: true }));
                }
            } 
        });

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 } sx= {{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Title />
            <Stack direction= "column" justifyContent= "center" alignItems= "stretch" sx= {{ height: '100%', overflow: 'hidden', bgcolor: '#fff', borderRadius: '8px' }} spacing= { 2 }>
                <QrReader delay={ 4000 } onError= { err => console.log(err) } 
                    videoContainerStyle={{ padding: 0 }} 
                    videoStyle= {{ position: 'relative', width: '100%' }} 
                    facingMode= "environment"
                    onResult= { data => { if(data !== null && data !== undefined) { scanned({ id: data.text, token: (sessionStorage.getItem('token')).split('.')[1], type: 'assets' }); } } } />
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= { `/assets/received` }>Close</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;