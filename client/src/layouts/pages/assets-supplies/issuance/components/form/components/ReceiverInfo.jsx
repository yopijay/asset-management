// Libraries
import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

// Core
import FormBuilder from "core/components/form";

// Constants
import Receiver from "../../../receiver"; // Fields

const ReceiverInfo = props => {
    const { fetching, errors, control, getValues, setValue, setError } = props;

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
            <Typography variant= "body2" color= "#9BA4B5">Receiver's info</Typography>
            <Box>
                <FormBuilder 
                    fields= { 
                        Receiver({ 
                            fetching: fetching, 
                            errors: errors, 
                            control: control, 
                            getValues: getValues, 
                            setValue: setValue, 
                            setError: setError 
                        }) 
                    } />
            </Box>
        </Stack>
    );
}

ReceiverInfo.propTypes = {
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default ReceiverInfo