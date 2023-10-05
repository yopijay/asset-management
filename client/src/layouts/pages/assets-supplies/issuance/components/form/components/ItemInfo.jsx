// Libraries
import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

// Core
import FormBuilder from "core/components/form"; // Form builder

// Components
import Classification from "../classifications";

// Constants
import Stock from "../../../stock"; // Fields

const ItemInfo = props => {

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Typography variant= "body2" color= "#9BA4B5">Item's info</Typography>
                <Box><FormBuilder fields= { Stock({ ...props }) } /> </Box>
            </Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Typography variant= "body2" color= "#9BA4B5">Specification:</Typography>
                <Classification { ...props } />
            </Stack>
        </Stack>
    );
}

ItemInfo.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default ItemInfo;