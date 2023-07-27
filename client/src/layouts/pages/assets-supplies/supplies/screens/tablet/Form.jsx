// Libraries
import { Stack, ThemeProvider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

// Core
import { Components } from "core/theme"; // Theme
import FormBuilder from "core/components/form"; // Form Builder

// Constants
import { cancel, card, content, input, save, title } from "./index.style"; // Styles
import Supplies from "../../supplies"; // Fields

const Form = () => {
    const { type } = useParams();

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } Supplies</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <ThemeProvider theme= { Components(input) }>
                <Stack sx= { card }><FormBuilder fields= { Supplies() } /></Stack>
            </ThemeProvider>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancel } component= { Link } to= "/assets-supplies/supplies">Cancel</Typography>
                <Typography sx= { save }>Save</Typography>
            </Stack>
        </Stack>
    );
}

export default Form;