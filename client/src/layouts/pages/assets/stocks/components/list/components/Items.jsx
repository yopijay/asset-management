// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { ListCntxt } from "core/context/List";

import { title } from "../style";
import { Link } from "react-router-dom";

const Items = () => {
    const { list } = useContext(ListCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }} spacing= { 5 }>
            { list?.length > 0 ? 
                list?.map((data, index) => 
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } key= { index }>
                        <Typography sx= { title }>{ data.category }</Typography>
                        <Box>
                            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 3 }>
                                { (data.brands).map((brd, index) => 
                                    <Grid item xs= { 12 } sm= { 4 } md= { 3 } key= { index }>
                                        <Stack direction= "row" justifyContent= "flex-start" alignItems= "stretch" 
                                            sx= {{ backgroundColor: '#ffffff', overflow: 'hidden', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}
                                            component= { Link } to= { `/assets/stocks/${((data.category).toLowerCase()).replace(' ', '-')}/${((brd.brand).toLowerCase()).replace(' ', '-')}` }>
                                            <Typography sx= {{ flexGrow: 1, padding: '16px 8px' }}>{ brd.brand }</Typography>
                                            <Typography sx= {{ backgroundColor: '#DFDFDE', padding: '16px 20px', fontWeight: 'bold' }}>{ brd.count }</Typography>
                                        </Stack>
                                    </Grid> ) }
                            </Grid>
                        </Box>
                    </Stack> )
                : <Typography variant= "body2" color= "#9DB2BF" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
        </Stack>
    );
}

export default Items;