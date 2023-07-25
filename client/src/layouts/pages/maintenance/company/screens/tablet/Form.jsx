// Libraries
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Core
import { FormPrvdr } from "core/context/Form"; // Provider

// Components
import Title from "../../components/form/Title";
import Fields from "../../components/form/Fields";

// Constants
import { cancel, content, save } from "./index.style"; // Styles

const Form = () => {
    return (
        <FormPrvdr>
            <Stack sx= { content } spacing= { 4 }>
                <Title />
                <Fields />
                <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
                    <Typography sx= { cancel } component= { Link } to= "/maintenance/company">Cancel</Typography>
                    <Typography sx= { save }>Save</Typography>
                </Stack>
            </Stack>
        </FormPrvdr>
    );
}

export default Form;