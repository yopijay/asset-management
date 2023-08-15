// Libraries
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Stack, Typography } from "@mui/material";

// Core
import FormBuilder from "core/components/form"; // Form Builder
import { FormCntxt } from "core/context/Form"; // Context

// Constants
import Employee from "./employee.fields";

const EmployeeForm = ({ fetching }) => {
    const { type } = useParams();
    const { setValue } = useContext(FormCntxt);

    useEffect(() => { if(type === 'new') { ['rfid', 'branch', 'user_level'].map(name => setValue(name, '')); } }, [ type, setValue ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
            <Typography>Employee Information</Typography>
            <FormBuilder fields= { Employee({ fetching }) } />
        </Stack>
    );
}

export default EmployeeForm;