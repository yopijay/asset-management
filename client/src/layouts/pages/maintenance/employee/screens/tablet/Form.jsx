// Libraries
import { Stack, ThemeProvider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Provider
import { Components } from "core/theme"; // Theme
import FormBuilder from "core/components/form"; // Form Builder

// Constants
import { cancel, card, content, input, save, title } from "./index.style"; // Styles
import { validation } from "../../index.validation"; // Validations
import Account from "../../account"; // Fields
import Employee from "../../employee"; // Fields
import Personal from "../../personal"; // Fields

const Form = () => {
    const { type } = useParams();
    const { setValidation } = useContext(FormCntxt);

    useEffect(() => { setValidation(validation()); }, [ setValidation ]);

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } Employee</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <Stack sx= { card } spacing= { 5 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                    <Typography sx= {{ fontWeight: 'bold', color: '#394867' }}>Account Information</Typography>
                    <FormBuilder fields= { Account() } />
                </Stack>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                    <Typography sx= {{ fontWeight: 'bold', color: '#394867' }}>Employee Information</Typography>
                    <ThemeProvider theme= { Components(input) }><FormBuilder fields= { Employee() } /></ThemeProvider>
                </Stack>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                    <Typography sx= {{ fontWeight: 'bold', color: '#394867' }}>Personal Information</Typography>
                    <ThemeProvider theme= { Components(input) }><FormBuilder fields= { Personal() } /></ThemeProvider>
                </Stack>
            </Stack>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancel } component= { Link } to= "/maintenance/employee">Cancel</Typography>
                <Typography sx= { save }>Save</Typography>
            </Stack>
        </Stack>
    );
}

export default Form;