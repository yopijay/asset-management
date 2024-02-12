// Libraries
import { Stack } from "@mui/material";
import { QrReader } from "react-qr-reader";

// Components
import Title from "./components/Title";

const Index = () => {

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 } sx= {{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Title />
            <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= {{ height: '100%', overflow: 'hidden', bgcolor: '#fff' }}>
                <QrReader delay={ 3000 } onError= { err => console.log(err) } style= {{ width: '100%', height: '100%' }} facingMode= "user"
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
        </Stack>
    );
}

export default Index;