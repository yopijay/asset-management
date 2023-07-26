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
    borderRadius: '5px'
}

const Index = props => {
    const { label, fetching, disabled, name } = props;
    const { register, errors } = useContext(FormCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "35px" /> : 
                <TextField name= { name } { ...register(name) } variant= "standard" InputProps= {{ disableUnderline: true }} disabled= { disabled } sx= { input } /> }
            <Typography variant= "body2" color= "error.dark">{ errors[name]?.message }</Typography>
        </Stack>
    );
}

export default Index;