// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import FormBuilder from "core/components/form"; // Form Builder

// Forms
import Monitor from "./form/assets/monitor";
import Laptop from "./form/assets/laptop";
import SystemUnit from "./form/assets/systemunit";
import Toner from "./form/supplies/toner";

const Index = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues } = useContext(FormCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            { getValues()?.type === 'monitor' ? <FormBuilder fields= { Monitor({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : 
                getValues()?.type === 'laptop' ? <FormBuilder fields= { Laptop({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : 
                getValues()?.type === 'system_unit' ? <FormBuilder fields= { SystemUnit({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : 
                getValues()?.type === 'toner' ? <FormBuilder fields= { Toner({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : '' }
        </Stack>
    );
}

export default Index;