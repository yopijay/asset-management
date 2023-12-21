// Libraries
import { Box, Stack, Typography } from "@mui/material";

// Core
import FormBuilder from "core/components/form"; // Form Builder

import Categories from "./fields";
import { useParams } from "react-router-dom";

const Category = props => {
    const { category } = useParams();

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Typography color= "#9BA4B5">Specifications:</Typography>
            <Box><FormBuilder fields= { Categories[(category.replace('-', '_')).toLowerCase()]({ ...props }) } /></Box>
        </Stack>
    );
}

export default Category