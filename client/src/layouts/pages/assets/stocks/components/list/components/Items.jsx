// Libraries
import { Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { card, title } from "../style";

const Items = ({ data }) => {

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }} spacing= { 5 }>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
                { data?.length > 0 ?
                    data.map((ctg, index) => 
                        <Grid item xs= { 6 } sm= { 4 } md= { 3 } key= { index }>
                            <Stack  sx= { card } component= { Link } to= { `/assets/stocks/${((ctg.name).toLowerCase()).replace(' ', '-')}` }>
                                <Typography textAlign= "center" variant= "h6" sx= { title }>{ ctg.name }</Typography>        
                            </Stack>
                        </Grid> )
                    : <Typography variant= "body2" color= "#9DB2BF" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 4 }>No record/s found!</Typography> }
            </Grid>
        </Stack>
    );
}

export default Items;