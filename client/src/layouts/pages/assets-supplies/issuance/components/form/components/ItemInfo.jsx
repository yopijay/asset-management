// Libraries
import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

// Core
import FormBuilder from "core/components/form";
import Stock from "../../../stock";

// Constants

const ItemInfo = props => {
    const { fetching, errors, control, getValues, setValue, setError } = props;

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
            <Typography variant= "body2" color= "#9BA4B5">Item's info</Typography>
            <FormBuilder
                fields= {
                    Stock({
                        fetching: fetching, 
                        errors: errors, 
                        control: control, 
                        getValues: getValues, 
                        setValue: setValue, 
                        setError: setError 
                    })
                } />
        </Stack>
    );
}

ItemInfo.propTypes = {
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default ItemInfo;