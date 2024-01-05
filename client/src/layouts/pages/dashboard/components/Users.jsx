// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";
import { category, label } from "../style";

const Users = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Typography sx= { label }>Users per Branch</Typography>
            <Box>
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
                    <Grid item xs= { 12 } md= { 4 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= { category }>

                        </Stack>
                    </Grid>
                    <Grid item xs= { 12 } md= { 4 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= { category }>

                        </Stack>
                    </Grid>
                    <Grid item xs= { 12 } md= { 4 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= { category }>

                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
}

export default Users;