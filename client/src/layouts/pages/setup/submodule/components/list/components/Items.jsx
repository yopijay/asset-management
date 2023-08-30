// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { ListCntxt } from "core/context/List"; // Context

// Components
import List from "./listing/List";
import Grids from "./listing/Grids";

// Constants
import { items } from "../index.style"; // Styles

const Items = () => {
    const { list, listing } = useContext(ListCntxt);

    return (
        <Stack sx= { items }>
            { list.length > 0 ?
                listing === 'list' ?
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>{ list.map((data, index) => <List data= { data } key= { index } /> ) }</Stack> : 
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                        { list.map((data, index) => <Grid item xs= { 12 } sm= { 6 } md= { 4 } key= { index }><Grids data= { data } /></Grid>) }
                    </Grid>
                : <Typography variant= "body2" color= "#9DB2BF" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
        </Stack>
    );
}

export default Items;