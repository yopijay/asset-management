// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { ListCntxt } from "core/context/List"; // Context

// Components
import List from "./components/List";
import Grids from "./components/Grids";

// Constants
import { items } from "./list.style"; // Styles

const Items = () => {
    const { list, listing } = useContext(ListCntxt);

    return (
        <Stack sx= { items }>
            <Box>
                { list.length > 0 ?
                    listing === 'list' ?
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>{ list.map((data, index) => <List data= { data } key= { index } /> ) }</Stack> : 
                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                            { list.map((data, index) => <Grid item xs= { 12 } sm= { 6 } md= { 4 } key= { index }><Grids data= { data } /></Grid>) }
                        </Grid>
                    : <Typography variant= "body2" color= "#9DB2BF" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
            </Box>
        </Stack>
    );
}

export default Items;