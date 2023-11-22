// Libraries
import { Box } from "@mui/material";

// Core
import FormBuilder from "core/components/form"; // Form Builder

import Fields from "./fields";

const Index = props => <Box><FormBuilder fields= { Fields({ ...props }) } /></Box>

export default Index;