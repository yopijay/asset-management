// Libraries
import { Skeleton, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context

// Custom styles
const input = {
    border: 'solid 1px #ced6e0',
    padding: {
        xs: '10px 8px 8px 8px',
        md: '6px 10px 5px 10px'
    },
    borderRadius: '5px',
    transition: 'all 0.2s ease-in-out'
}

const Index = props => {
    const { label, fetching, disabled, name, type, InputProps, value } = props;
    const { register, errors } = useContext(FormCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "35px" /> : 
                <TextField name= { name } { ...register(name) } variant= "standard" value= { value }
                    InputProps= {{ disableUnderline: true, ...InputProps }} disabled= { disabled } sx= { input } type= { type } /> }
            <Typography variant= "body2" color= "error.dark">{ errors[name]?.message }</Typography>
        </Stack>
    );
}

export default Index;