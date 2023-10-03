// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import FormBuilder from "core/components/form"; // Form Builder

// Forms
import Monitor from "./form/monitor";
import Laptop from "./form/laptop";
import SystemUnit from "./form/systemunit";
import Toner from "./form/toner";

const Index = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues } = useContext(FormCntxt);

    return (
        <Box>
            { getValues()?.category === 'monitor' ? <FormBuilder fields= { Monitor({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : 
                getValues()?.category === 'laptop' ? <FormBuilder fields= { Laptop({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : 
                getValues()?.category === 'system_unit' ? <FormBuilder fields= { SystemUnit({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : 
                getValues()?.category === 'toner' ? <FormBuilder fields= { Toner({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> :
                    <Typography sx= {{ textAlign: 'center' }} color= "#9BA4B5">Please select a category first!</Typography> }
        </Box>
    );
}

export default Index;