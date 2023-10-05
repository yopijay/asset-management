// Libraries
import { Box, Typography } from "@mui/material";

// Core
import FormBuilder from "core/components/form"; // Form Builder

// Forms
import Monitor from "./form/monitor";
import Laptop from "./form/laptop";
import SystemUnit from "./form/systemunit";
import Toner from "./form/toner";

const Index = props => {
    const { getValues } = props;

    return (
        <Box>
            { getValues()?.category === 'monitor' ? <FormBuilder fields= { Monitor({ ...props }) } /> : 
                getValues()?.category === 'laptop' ? <FormBuilder fields= { Laptop({ ...props }) } /> : 
                getValues()?.category === 'system_unit' ? <FormBuilder fields= { SystemUnit({ ...props }) } /> : 
                getValues()?.category === 'toner' ? <FormBuilder fields= { Toner({ ...props }) } /> :
                    <Typography sx= {{ textAlign: 'center' }} color= "#9BA4B5">Please select a category first!</Typography> }
        </Box>
    );
}

export default Index;