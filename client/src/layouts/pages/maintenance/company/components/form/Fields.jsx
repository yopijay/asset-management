// Libraries
import { Grid, Stack } from "@mui/material";

// Components
import Textfield from "core/components/form/textfield";
import Textarea from "core/components/form/textarea";

// Constants
import Company from "./company"; // Fields
import { card } from "./form.style"; // Styles

const Fields = () => {
    return (
        <Stack sx= { card }>
            <form autoComplete= "off">
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
                    { Company().map((field, index) => (
                        <Grid item key= { index } { ...field.grid }>
                            { field.type === 'textfield' ? <Textfield { ...field.props } /> : '' }
                            { field.type === 'textarea' ? <Textarea { ...field.props } /> : '' }
                        </Grid>
                    )) }
                </Grid>
            </form>
        </Stack>
    );
}

export default Fields;