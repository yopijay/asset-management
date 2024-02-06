// Libraries
import { Avatar, FormLabel, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// Core
import { IMAGE } from "core/constants/Global"; // Constants
import { base64 } from "core/function/global"; // Functions

import { btn } from "../style";

const Picture = props => {
    // const { register, fetching, errors, setValue, setError, getValues } = props;
    const [ pic, setPic ] = useState(IMAGE);
    
    // useEffect(() => { 
    //     if(!fetching) { setPic(getValues()?.profile !== undefined ? JSON.parse(getValues()?.profile) : IMAGE); } 
    // }, [ fetching, getValues, register ]);

    return (
        <Stack direction= "column" justifyContent= "center" alignItems= "center" spacing= { 1 }>
            <Avatar src= { pic } sx= {{ width: '170px', height: '170px', border: 'solid 5px #dfe6e9' }} />
            <FormLabel htmlFor= "profile" sx= { btn }>Upload your photo</FormLabel>
            <input type= "file" name= "profile" id= "profile" style= {{ width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 }}
                onChange= { async (e) => {
                    // setError('profile', { message: '' });
                    // let file = e.target.files[0];
                    // let image = await base64(file);
                    
                    // setPic(image);
                    // setValue('profile', JSON.stringify(image));
                }} />
            {/* <Typography variant= "caption" color= "error.dark">{ errors.profile?.message }</Typography> */}
        </Stack>
    );
}

export default Picture;