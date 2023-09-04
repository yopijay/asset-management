// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import FormBuilder from "core/components/form"; // Form Builder

// Forms
import Toner from "./form/toner";

const Index = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues } = useContext(FormCntxt);

    return (
        <Box>
            { getValues()?.type === 'toner' ? <FormBuilder fields= { Toner({ fetching: fetching, type: type, getValues: getValues, setValue: setValue }) } /> : '' }
        </Box>
    );
}

export default Index;