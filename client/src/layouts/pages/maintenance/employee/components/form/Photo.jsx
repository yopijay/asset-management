// Libraries
import { Avatar, FormLabel, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { base64 } from "core/function/global"; // Function

// Custom styles
const btn = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '50px',
    zIndex: 1,
    marginTop: '-20px',
    marginRight: '10px',
    width: '40px',
    height: '40px',
    border: 'solid 1px #dfe4ea',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',

    '&:hover': { backgroundColor: '#dfe4ea' }
}

const Photo = ({ fetching }) => {
    const { type } = useParams();
    const { register, errors, setError, getValues, setValue } = useContext(FormCntxt);
    const [ pic, setpic ] = useState('#');

    useEffect(() => { register('photo'); if(!fetching) { setpic(getValues().photo !== undefined ? JSON.parse(getValues().photo) : '#'); } }, [ fetching, getValues, register ]);

    return (
        <Stack direction= "row" justifyContent= "center" alignItems= "center">
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "flex-end">
                <Avatar src= { pic } sx= {{ width: '180px', height: '180px', border: 'solid 5px #DFE4EAA' }} variant= "rounded" />
                { type !== 'view' ? <FormLabel htmlFor= "photo" sx= { btn }><FontAwesomeIcon icon= { solid('camera') } /></FormLabel> : '' }
                <input type= "file" name= "photo" id= "photo" style= {{ width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1 }}
                    onChange= { async (e) => {
                        setError('photo', { message: '' });
                        let file = e.target.files[0];
                        let image = await base64(file);

                        setpic(image);
                        setValue('photo', JSON.stringify(image));
                    }} />
                <Typography variant= "body2" color= "error.main" gutterBottom>{ errors.photo?.message }</Typography>
            </Stack>
        </Stack>
    );
}

export default Photo;