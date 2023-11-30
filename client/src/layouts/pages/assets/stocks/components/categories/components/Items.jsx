// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { ListCntxt } from "core/context/List"; // Context

import { caption, listview, subtitle, listtitle } from "../style";
const status = { good: 'A0C49D', defect: 'FF6666' }

const Items = props => {
    const { list, category, brand } = props;
    const { listing } = useContext(ListCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            { list.length > 0 ?
                listing === 'list' ?
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                        { list.map((data, index) => 
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center" sx= { listview } key= { index }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                                    <Typography variant= "caption" sx= { caption }>{ data.series_no }</Typography>
                                    <Typography sx= { listtitle }>{ data.serial_no }</Typography>
                                    <Typography sx= { subtitle } variant= "body2">{ data.model }</Typography>
                                    { category === 'toner' ? <Typography sx= { subtitle } variant= "body2">Quantity: { data.quantity }</Typography> : '' }
                                </Stack>
                                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } paddingLeft= "10px">
                                    <Box sx= {{ width: '10px', height: '10px', backgroundColor: `#${status[data.status]}`, borderRadius: '50px' }} />
                                    <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1.5 }>
                                        <Typography color= "#9BA4B5" component= { Link } to= { `/assets/stocks/${category}/${brand}/form/update/${data.id}` }>
                                            <FontAwesomeIcon icon= { solid('pencil') } size= "lg" />
                                        </Typography>
                                        <Typography color= "#9BA4B5" component= { Link } to= { `/assets/stocks/${category}/${brand}/form/view/${data.id}` }>
                                            <FontAwesomeIcon icon= { solid('eye') } size= "lg" />
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack> ) }
                    </Stack> : 
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                        { list.map((data, index) => 
                            <Grid item xs= { 12 } sm= { 6 } md= { 4 } key= { index }>
                                <Stack direction= "row" justifyContent= "space-between" alignItems= "center" sx= { listview } component= { Link } 
                                    to= { `/assets/stocks/${category}/${brand}/form/update/${data.id}` }>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                                        <Typography variant= "caption" sx= { caption }>{ data.series_no }</Typography>
                                        <Typography sx= { listtitle }>{ data.serial_no }</Typography>
                                        <Typography sx= { subtitle } variant= "body2">{ data.model }</Typography>
                                        { category === 'toner' ? <Typography sx= { subtitle } variant= "body2">Quantity: { data.quantity }</Typography> : '' }
                                    </Stack>
                                    <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } paddingLeft= "10px">
                                        <Box sx= {{ width: '10px', height: '10px', backgroundColor: `#${status[data.status]}`, borderRadius: '50px' }} />
                                    </Stack>
                                </Stack>
                            </Grid>) }
                    </Grid>
                : <Typography variant= "body2" color= "#9DB2BF" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
        </Stack>
    );
}

export default Items;