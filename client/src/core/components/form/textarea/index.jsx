// Libraries
import { Skeleton, Stack, TextareaAutosize, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context

// Custom style
const textarea = {
    border: 'solid 1px #ced6e0',
    borderRadius: '5px',
    fontFamily: 'Montserrat',
    fontSize: '105%',
    padding: '10px',
    outline: 'none',
    textTransform: 'uppercase',
    color: '#353b48',
    transition: 'all 0.2s ease-in-out'
}

const Index = props => {
    const { label, fetching, disabled, name } = props;
    const { register, errors } = useContext(FormCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "100px" /> : 
                <TextareaAutosize name= { name } minRows= { 4 } maxRows= { 4 } disabled= { disabled } style= { textarea } { ...register(name) } /> }
            <Typography variant= "body2" color= "error.dark">{ errors[name]?.message }</Typography>
        </Stack>
    );
}

export default Index;