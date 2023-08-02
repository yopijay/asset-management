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
                    <Grid container direction= { listing ? 'column' : 'row' } justifyContent= "flex-start" alignItems= { listing ? 'stretch' : 'flex-start' } spacing= { 1 }>
                        { listing ? 
                            list.map((data, index) => <Grid item key= { index }><List data= { data } /></Grid> ) :
                            list.map((data, index) => <Grid item xs= { 12 } sm= { 6 } md= { 4 } lg= { 3 } key= { index }><Grids data= { data } /></Grid>) }
                    </Grid> :
                    <Typography variant= "body2" color= "#9DB2BF" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
            </Box>
        </Stack>
    );
}

export default Items;