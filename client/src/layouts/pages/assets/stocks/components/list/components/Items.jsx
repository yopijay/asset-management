// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

// Core
import { ListCntxt } from "core/context/List";

import { card, title } from "../style";

const Items = () => {
    const { list } = useContext(ListCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }} spacing= { 5 }>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
                { list?.length > 0 ?
                    list?.map((data, index) => 
                    <Grid item xs= { 6 } sm= { 4 } md= { 3 } key= { index }>
                        <Stack  sx= { card } component= { Link } to= { `/assets/stocks/${((data.name).toLowerCase()).replace(' ', '-')}` }>
                            <Typography textAlign= "center" variant= "h6" sx= { title }>{ data.name }</Typography>
                        </Stack>
                    </Grid> )
                    : <Typography variant= "body2" color= "#9DB2Bf" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 4 }>No record/s found!</Typography> }
            </Grid>
        </Stack>
    );
}

export default Items;