// Libraries
import { Avatar, FormLabel, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";

// Core
import { IMAGE } from "core/constants/Global"; // Constants
import { base64 } from "core/function/global"; // Functions
import { FormCntxt } from "core/context/Form"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import { btn } from "../style";

const Picture = () => {
    const { data } = useContext(AccountCntxt);
    const { register, setValue, setError } = useContext(FormCntxt);
    const [ pic, setPic ] = useState(IMAGE);
    
    useEffect(() => {
        setPic(data?.profile !== undefined ? JSON.parse(data?.profile) : IMAGE);
    }, [ data, register ]);

    return (
        <Stack direction= "column" justifyContent= "center" alignItems= "center" spacing= { 1 }>
            <Avatar src= { pic } sx= {{ width: '170px', height: '170px', border: 'solid 5px #dfe6e9' }} />
            { data.user_level !== 'superadmin' ? <FormLabel htmlFor= "profile" sx= { btn }>Upload your photo</FormLabel> : '' }
            <input type= "file" name= "profile" id= "profile" style= {{ width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 }}
                onChange= { async (e) => {
                    setError('profile', { message: '' });
                    let file = e.target.files[0];
                    let image = await base64(file);
                    
                    setPic(image);
                    setValue('profile', JSON.stringify(image));
                }} />
        </Stack>
    );
}

export default Picture;