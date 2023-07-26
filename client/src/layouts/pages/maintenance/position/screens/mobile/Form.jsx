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
import Position from "../../position"; // Fields

const Form = () => {
    const { type } = useParams();
    const { setValidation, handleSubmit, getValues } = useContext(FormCntxt);

    useEffect(() => { setValidation(validation()); }, [ setValidation ]);

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } Position</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <ThemeProvider theme= { Components(input) }>
                <Stack sx= { card }><FormBuilder fields= { Position() } /></Stack>
            </ThemeProvider>
            <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancel } component= { Link } to= "/maintenance/position">Cancel</Typography>
                <Typography sx= { save }>Save</Typography>
            </Stack>
        </Stack>
    );
}

export default Form;