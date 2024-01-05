// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import { caption, listview, subtitle, title } from "../style";
const status = { received: '#27ae60', pending: '#e67e22', failed: '#e74c3c' }

const Items = () => {
    const { list, listing } = useContext(ListCntxt);
    const { data } = useContext(AccountCntxt);

    let authupdate = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.issuance.update);
    let authview = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).assets.issuance.view);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            { list.length > 0 ?
                listing === 'list' ?
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                        { list.map((data, index) => 
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center" sx= { listview } key= { index }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }} spacing= { 2 }>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                        <Typography variant= "caption" sx= { caption }>{ data.series_no }</Typography>
                                        <Typography variant= "body2" sx= { subtitle }>{ data.category }</Typography>
                                        <Typography variant= "body2" sx= { subtitle }>{ data.serial_no ?? data.model }</Typography>
                                    </Stack>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                        <Typography sx= { title }>Issued to: { data.issued_to }</Typography>
                                        <Typography sx= { title }>Issued by: { data.issued_by }</Typography>
                                        <Typography variant= "body2" sx= { subtitle }>Date issued: { data.date_issued }</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } paddingLeft= "10px">
                                    <Box sx= {{ width: '10px', height: '10px', backgroundColor: status[data.status], borderRadius: '50px' }} />
                                    <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1.5 }>
                                        { authupdate ? <Typography color= "#636e72" component= { Link } to= { `/assets/issuance/form/update/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('pencil') } size= "lg" />
                                            </Typography> : '' }
                                        { authview ? <Typography color= "#636e72" component= { Link } to= { `/assets/issuance/form/view/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('eye') } size= "lg" />
                                            </Typography> : '' }
                                    </Stack>
                                </Stack>
                            </Stack> ) }
                    </Stack> : 
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                        { list.map((data, index) => 
                            <Grid item xs= { 12 } sm= { 6 } md= { 4 } key= { index }>
                                <Stack direction= "row" justifyContent= "space-between" alignItems= "center" sx= { listview } 
                                    component= { authupdate ? Link : Stack } to= { `/assets/issuance/form/update/${data.id}` }>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }} spacing= { 2 }>
                                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                            <Typography variant= "caption" sx= { caption }>{ data.series_no }</Typography>
                                            <Typography variant= "body2" sx= { subtitle }>{ data.category }</Typography>
                                            <Typography variant= "body2" sx= { subtitle }>{ data.serial_no ?? data.model }</Typography>
                                        </Stack>
                                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                            <Typography sx= { title }>Issued to: { data.issued_to }</Typography>
                                            <Typography sx= { title }>Issued by: { data.issued_by }</Typography>
                                            <Typography variant= "body2" sx= { subtitle }>Date issued: { data.date_issued }</Typography>
                                        </Stack>
                                    </Stack>
                                    <Box paddingLeft= "15px"><Box sx= {{ width: '10px', height: '10px', backgroundColor: status[data.status], borderRadius: '50px' }} /></Box>
                                </Stack>
                            </Grid>) }
                    </Grid>
                : <Typography variant= "body2" color= "#9DB2BF" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
        </Stack>
    );
}

export default Items;