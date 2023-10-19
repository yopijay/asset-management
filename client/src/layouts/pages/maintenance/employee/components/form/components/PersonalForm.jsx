// Libraries
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

// Core
import FormBuilder from "core/components/form"; // Form Builder
import { FormCntxt } from "core/context/Form"; // Context

// Constants
import Personal from "./personal.fields";

const PersonalForm = props => {
    const { type } = useParams();
    const { setValue } = useContext(FormCntxt);

    useEffect(() => { if(type === 'new') { ['fname', 'mname', 'lname', 'address'].map(name => setValue(name, '')); setValue('company_id', 0) } }, [ type, setValue ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Typography>Personal Information</Typography>
            <Box><FormBuilder fields= { Personal({ ...props }) } /></Box>
        </Stack>
    );
}

export default PersonalForm;