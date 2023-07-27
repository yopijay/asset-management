// Libraries
import { Stack, ThemeProvider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

// Core
import { Components } from "core/theme"; // Theme
import FormBuilder from "core/components/form"; // Form Builder

// Constants
import { cancel, card, content, input, save, title } from "./index.style"; // Styles
import General from "../../general"; // Fields
import Items from "../../items"; // Fields

const Form = () => {
    const { type } = useParams();

    return (
        <Stack sx= { content } spacing= { 4 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>{ type.charAt(0).toUpperCase() + type.slice(1) } Issuance</Typography>
                <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                    malesuada quam ut, vulputate massa.</Typography>
            </Stack>
            <ThemeProvider theme= { Components(input) }>
                <Stack sx= { card } spacing= { 5 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Typography sx= {{ fontWeight: 'bold', color: '#394867' }}>General Information</Typography>
                        <FormBuilder fields= { General() } />
                    </Stack>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Typography sx= {{ fontWeight: 'bold', color: '#394867' }}>Item Information</Typography>
                        <FormBuilder fields= { Items() } />
                    </Stack>
                </Stack>
            </ThemeProvider>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                <Typography sx= { cancel } component= { Link } to= "/assets-supplies/issuance">Cancel</Typography>
                <Typography sx= { save }>Save</Typography>
            </Stack>
        </Stack>
    );
}

export default Form;