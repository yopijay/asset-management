// Libraries
import { useContext } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { useGet } from "core/function/global"; // Function
import { dashboard } from "core/api"; // API

// Styles
import { card, subtitle, title } from "../style";

const Summary = () => {
    const { data } = useContext(AccountCntxt);
    // const { data: summary, isFetching: fetching } = useGet({ key: ['summary'], request: dashboard({ type: 'main', data: data }), options: { refetchInterval: 1000 } });

    // const sizes = (size, length) => {
    //     let xs= 0;
    //     let sm= 0;
    //     let md= 0;

    //     switch(size) {
    //         case 'xs':
    //             if(length > 1) { xs= 6; }
    //             else { xs= 12; }

    //             break;
    //         case 'sm':
    //             if(length === 1) { sm= 12; }
    //             if(length === 2) { sm= 6; }
    //             if(length === 3) { sm= 4; }
    //             if(length > 3) { sm= 3; }
                
    //             break;
    //         case 'md':
    //             if(length === 1) { md= 4; }
    //             if(length === 2) { md= 4; }
    //             if(length > 3) { md= 3; }

    //             break;
    //         default: 
    //     }

    //     return { xs, sm, md }
    // }

    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
                
            </Grid>
            {/* { !fetching ?
                summary.length > 0 ?
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        { summary.map((data, index) => 
                            <Grid item key= { index } xs= { sizes('xs', summary.length).xs } sm= { sizes('sm', summary.length).sm } md= { sizes('md', summary.length).md }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { card }>
                                    <Typography sx= { title }>{ (data.name).charAt(0).toUpperCase() + (data.name).slice(1) }</Typography>
                                    <Typography sx= { subtitle }>{ data.quantity }</Typography>
                                </Stack>
                            </Grid> ) }
                    </Grid> : '' : '' } */}
        </Box>
    );
}

export default Summary;