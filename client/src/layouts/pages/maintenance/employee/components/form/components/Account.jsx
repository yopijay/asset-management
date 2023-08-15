// Libraries
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Stack, Typography } from "@mui/material";

// Core
import FormBuilder from "core/components/form"; // Form Builder
import { FormCntxt } from "core/context/Form"; // Context

// Constants
import Account from "./account.fields";

const AccountForm = ({ fetching }) => {
    const { type } = useParams();
    const { setValue } = useContext(FormCntxt);

    useEffect(() => { if(type === 'new') { ['email', 'password', 'confirm_password'].map(name => setValue(name, '')); } }, [ type, setValue ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
            <Typography>Account Information</Typography>
            <Box>
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                    <Grid item xs= { 12 } md= { 5 }></Grid>
                    <Grid item xs= { 12 } md= { 7 }><FormBuilder fields= { Account({ fetching }) } /></Grid>
                </Grid>
            </Box>
        </Stack>
    );
}

export default AccountForm;