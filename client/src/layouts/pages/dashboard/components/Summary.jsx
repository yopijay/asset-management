// Libraries
import { useContext } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

// Core
import { AccountCntxt } from "core/context/Account"; // Context

// Styles
import { panel, subtitle, title } from "../style"; 

const Summary = props => {
    const { usr, usrfetching, stck, stckfetching, mdl, mdlfetching } = props;
    const { data } = useContext(AccountCntxt);

    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                { data.user_level === 'superadmin' || ((JSON.parse(data.permission)).setup?.users?.list ?? false) ? 
                    <Grid item xs= { 6 } md= { 3 }>
                        <Stack direction= {{ xs: 'row', lg: 'column' }} justifyContent= "space-between" alignItems= {{ xs: 'center', lg: 'stretch' }} spacing= { 2 } sx= { panel }>
                            <Typography sx= { title }>USERS</Typography>
                            <Typography sx= { subtitle }>{ !usrfetching ? usr.total : 0 }</Typography>
                        </Stack>
                    </Grid> : '' }
                { data.user_level === 'superadmin' || ((JSON.parse(data.permission)).assets?.stocks?.list ?? false) ? 
                    <Grid item xs= { 6 } md= { 3 }>
                        <Stack direction= {{ xs: 'row', lg: 'column' }} justifyContent= "space-between" alignItems= {{ xs: 'center', lg: 'stretch' }} spacing= { 2 } sx= { panel }>
                            <Typography sx= { title }>STOCKS</Typography>
                            <Typography sx= { subtitle }>{ !stckfetching ? stck.total : 0 }</Typography>
                        </Stack>
                    </Grid> : '' }
                { data.user_level === 'superadmin' || ((JSON.parse(data.permission)).assets?.products?.list ?? false) ?
                    <Grid item xs= { 6 } md= { 3 }>
                        <Stack direction= {{ xs: 'row', lg: 'column' }} justifyContent= "space-between" alignItems= {{ xs: 'center', lg: 'stretch' }} spacing= { 2 } sx= { panel }>
                            <Typography sx= { title }>PRODUCTS</Typography>
                            <Typography sx= { subtitle }>{ 0 }</Typography>
                        </Stack>
                    </Grid> : '' }
                { data.user_level === 'superadmin' || ((JSON.parse(data.permission)).setup?.modules?.list ?? false) ?
                    <Grid item xs= { 6 } md= { 3 }>
                        <Stack direction= {{ xs: 'row', lg: 'column' }} justifyContent= "space-between" alignItems= {{ xs: 'center', lg: 'stretch' }} spacing= { 2 } sx= { panel }>
                            <Typography sx= { title }>MODULES</Typography>
                            <Typography sx= { subtitle }>{ !mdlfetching ? mdl.total : 0 }</Typography>
                        </Stack>
                    </Grid> : '' }
            </Grid>
        </Box>
    );
}

export default Summary;