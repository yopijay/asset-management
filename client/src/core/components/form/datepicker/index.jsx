// Libraries
import { Box, Skeleton, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

// Core
import { FormCntxt } from "core/context/Form"; // Context

const Index = props => {
    const { label, fetching, disabled, name, ...others } = props;
    const { register, errors } = useContext(FormCntxt);

    const date = {
        border: 'solid 1px #dfe4ea',
        padding: {
            xs: '12px 8px 9px 8px',
            md: '9px 10px 6px 10px'
        },
        borderRadius: '5px'
    }

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "35px" /> :
                <Box sx= { date }>
                </Box> }
            <Typography variant= "body2" color= "error.dark">{ errors[name]?.message }</Typography>
        </Stack>
    );
}

export default Index;