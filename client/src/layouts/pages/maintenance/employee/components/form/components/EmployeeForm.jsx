// Libraries
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

// Core
import FormBuilder from "core/components/form"; // Form Builder
import { FormCntxt } from "core/context/Form"; // Context

// Constants
import Employee from "./employee.fields";

const EmployeeForm = props => {
    const { type } = useParams();
    const { setValue } = useContext(FormCntxt);

    useEffect(() => { if(type === 'new') { ['rfid', 'branch', 'user_level'].map(name => setValue(name, '')); } }, [ type, setValue ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Typography>Employee Information</Typography>
            <Box><FormBuilder fields= { Employee({ ...props }) } /></Box>
        </Stack>
    );
}

export default EmployeeForm;