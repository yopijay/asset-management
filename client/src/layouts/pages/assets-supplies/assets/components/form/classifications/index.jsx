// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import FormBuilder from "core/components/form"; // Form Builder

// Forms
import Monitor from "./form/monitor";
import Laptop from "./form/laptop";

const Index = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues } = useContext(FormCntxt);

    return (
        <Box>
            { getValues()?.type === 'monitor' ? <FormBuilder fields= { Monitor({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : 
                getValues()?.type === 'laptop' ? <FormBuilder fields= { Laptop({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : '' }
        </Box>
    );
}

export default Index;