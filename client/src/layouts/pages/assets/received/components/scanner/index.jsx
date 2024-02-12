// Libraries
import { Stack, Typography } from "@mui/material";
import { QrReader } from "react-qr-reader";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Components
import Title from "./components/Title";
import { camerabtn, cancelbtn } from "./style";

const Index = () => {
    const [ facing, setfacing ] = useState(true);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 } sx= {{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Title />
            <Stack direction= "column" justifyContent= "center" alignItems= "stretch" sx= {{ height: '100%', overflow: 'hidden', bgcolor: '#fff', borderRadius: '8px' }} spacing= { 2 }>
                <QrReader delay={ 3000 } onError= { err => console.log(err) } 
                    videoContainerStyle={{ padding: 0 }} 
                    videoStyle= {{ position: 'relative', width: '100%' }} 
                    facingMode= "environment"
                    onResult= { data => { 
                        console.log(data);
                            // if(data !== null) { 
                            //     console.log(data);
                                // let _data = getValues();
                                // let errors = [];
                                // _data['id'] = data;

                                // if(getValues().tracker_id === undefined || getValues().tracker_id === 0) { errors.push({ name: 'tracker_id', message: 'This field is required!' }); }
                                // if(getValues().branch === 'all') { errors.push({ name: 'branch', message: 'Please select a branch!' }); }

                                // if(!(errors.length > 0)) { track(_data); }
                                // else { errors.forEach(err => setError(err.name, { message: err.message })); }
                            // }
                        }
                    } />
            </Stack>
            <Stack direction= "row" justifyContent= {{ xs: 'space-between', sm: 'flex-end' }} alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancelbtn } component= { Link } to= { `/assets/received` }>Cancel</Typography>
                <Typography sx= { camerabtn }
                    onClick= { () => setfacing(!facing) }><FontAwesomeIcon icon= { solid('camera-rotate') } /> { facing ? 'Front cam' : 'Rear cam' }</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;