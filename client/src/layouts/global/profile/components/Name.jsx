// Libraries
import { Grid, Stack, TextField, Typography } from "@mui/material";

import { input } from "../style";

const Name = () => {
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 12 } md= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography gutterBottom variant= "body2" color= "#636e72">*First name</Typography>
                    <TextField name= "email" variant= "standard" sx= { input } InputProps= {{ disableUnderline: true }} />
                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}></Typography>
                </Stack>
            </Grid>
            <Grid item xs= { 12 } md= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography gutterBottom variant= "body2" color= "#636e72">Middle name</Typography>
                    <TextField name= "email" variant= "standard" sx= { input } InputProps= {{ disableUnderline: true }} />
                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}></Typography>
                </Stack>
            </Grid>
            <Grid item xs= { 12 } md= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography gutterBottom variant= "body2" color= "#636e72">*Last name</Typography>
                    <TextField name= "email" variant= "standard" sx= { input } InputProps= {{ disableUnderline: true }} />
                    <Typography variant= "caption" color= "error.dark" sx= {{ textAlign: 'right' }}></Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Name;