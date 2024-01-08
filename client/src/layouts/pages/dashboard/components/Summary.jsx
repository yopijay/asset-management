// Libraries
import { useContext } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { useGet } from "core/function/global"; // Function
import { dashboard } from "core/api"; // API

// Styles
import { bars, panel, subtitle, title } from "../style"; 

const Summary = () => {
    const { data } = useContext(AccountCntxt);
    const { data: summary, isFetching: summfetching } = useGet({ key: ['summary'], request: dashboard({ type: 'main', data: data }), options: { refetchOnWindowFocus: true } });
    const { data: users, isFetching: usrfetching } = useGet({ key: ['per-branch'], request: dashboard({ type: 'userperbranch', data: data }), options: { refetchOnWindowFocus: true } });

    return (
        <Box>
            { !summfetching && !usrfetching ?
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                    <Grid item xs= { 12 } sm= { 7 }>
                        <Stack direction= "column" justifyContent= "space-between" alignItems= "stretch" spacing= { 2 } sx= { panel }>
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                <Typography sx= { title }>{ (summary[0].name).toUpperCase() }</Typography>
                                <Typography sx= { subtitle }>{ summary[0].quantity }</Typography>
                            </Stack>
                            { data.user_level === 'superadmin' ? 
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                                    { users.map((usr, index) => 
                                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" key= { index }>
                                            <Typography>{ usr.name }</Typography>
                                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
                                                <Box sx= {{ backgroundColor: '#dfe6e9', overflow: 'hidden', borderRadius: '8px', flexGrow: 1 }}>
                                                    <Box sx= { bars(`${((parseInt(usr.quantity)/parseInt(summary[0].quantity)) * 100).toFixed(2)}%`) } />
                                                </Box>
                                                <Typography variant= "caption">{ parseInt(usr.quantity) }</Typography>
                                            </Stack>
                                        </Stack> ) }
                                </Stack> : '' }
                        </Stack>
                    </Grid>
                    <Grid item xs= { 12 } sm= { 5 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } height= "100%">
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { panel }>
                                <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                    <Typography sx= { title }>{ (summary[1].name).toUpperCase() }</Typography>
                                    <Typography sx= { subtitle }>{ summary[1].quantity }</Typography>
                                </Stack>
                            </Stack>
                            { summary.length > 2 ? 
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { panel }>
                                    <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                        <Typography sx= { title }>{ (summary[2].name).toUpperCase() }</Typography>
                                        <Typography sx= { subtitle }>{ summary[2].quantity }</Typography>
                                    </Stack>
                                </Stack> : '' }
                        </Stack>
                    </Grid>
                </Grid> :
                '' }
        </Box>
    );
}

export default Summary;