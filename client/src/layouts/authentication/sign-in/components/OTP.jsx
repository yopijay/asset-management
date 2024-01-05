// Libraries
import { Box, Grid, Stack, TextField, ThemeProvider, Typography } from "@mui/material";

// Core
import { Components } from "core/theme"; // Theme

// Constants
import { btn, cncl, code, input, title } from "../style"; // Styles

const OTP = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Typography sx= { title }>OTP Verification!</Typography>
                <Typography variant= "body2" color= "#C4D7B2">Enter the verification code we just sent to your email address.</Typography>
            </Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <form autoComplete= "off">
                    <ThemeProvider theme= { Components(code) }>
                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                            { ['one', 'two', 'three', 'four', 'five', 'six'].map( field => (
                                <Grid item xs= { 2 } key= { field }>
                                    <TextField name= { field } variant= "standard" InputProps= {{ disableUnderline: true }} inputProps= {{ maxLength: 1 }} sx= { input } />
                                </Grid>
                            ) )}
                        </Grid>
                    </ThemeProvider>
                </form>
                <Typography textAlign= "right" variant= "body2" color= "#9BA4B5">Resend</Typography>
            </Stack>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                <Grid item xs= { 4 }><Box sx= { cncl }>Cancel</Box></Grid>
                <Grid item xs= { 8 }><Box sx= { btn }>Verify</Box></Grid>
            </Grid>
        </Stack>
    );
}

export default OTP;