// Libraries
import { useContext } from "react";
import { Box } from "@mui/material";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import FormBuilder from "core/components/form"; // Form Builder
import Monitor from "./form/monitor";

const Index = ({ fetching }) => {
    const { getValues } = useContext(FormCntxt);

    return (
        <Box>
            { getValues()?.classification === 'monitor' ? <FormBuilder fields= { Monitor({ fetching: fetching }) } /> : '' }
        </Box>
    );
}

export default Index;