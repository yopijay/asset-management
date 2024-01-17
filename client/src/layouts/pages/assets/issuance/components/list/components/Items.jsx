// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import { caption, listview, menu, status, subtitle, title } from "../style";
const stats = { received: '#A0C49D91', pending: '#e67e2291', failed: '#FF666691' }

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
                        { list.map((iss, index) => 
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "flex-start" sx= { listview } key= { index } spacing= { 4 }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }} spacing= { 2 }>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                        <Typography variant= "caption" sx= { caption }>{ iss.series_no }</Typography>
                                        <Typography variant= "body2" sx= { subtitle }>{ iss.category }</Typography>
                                        <Typography variant= "body2" sx= { subtitle }>{ iss.serial_no ?? iss.model }</Typography>
                                    </Stack>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                        <Typography sx= { title }>Issued to: { iss.issued_to }</Typography>
                                        { data.user_level !== 'user' ? <Typography sx= { title }>Issued by: { iss.issued_by }</Typography> : '' }
                                        <Typography variant= "body2" sx= { subtitle }>Date issued: { iss.date_issued }</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 } paddingLeft= "10px">
                                    <Box sx= { status(stats[iss.status]) }>{ (iss.status).charAt(0).toUpperCase() + (iss.status).slice(1) }</Box>
                                    <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { .5 }>
                                        { authupdate && iss.status === 'pending' ? <Typography sx= { menu } component= { Link } to= { `/assets/issuance/form/update/${iss.id}` }>
                                                <FontAwesomeIcon icon= { solid('pencil') } />
                                            </Typography> : '' }
                                        { authview ? <Typography sx= { menu } component= { Link } to= { `/assets/issuance/form/view/${iss.id}` }>
                                                <FontAwesomeIcon icon= { solid('eye') } />
                                            </Typography> : '' }
                                    </Stack>
                                </Stack>
                            </Stack> ) }
                    </Stack> : 
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                        { list.map((iss, index) => 
                            <Grid item xs= { 12 } sm= { 6 } md= { 4 } key= { index }>
                                <Stack direction= "row" justifyContent= "space-between" alignItems= "flex-start" sx= { listview } 
                                    component= { authupdate ? Link : Stack } to= { `/assets/issuance/form/update/${iss.id}` } spacing= { 4 }>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }} spacing= { 2 }>
                                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                            <Typography variant= "caption" sx= { caption }>{ iss.series_no }</Typography>
                                            <Typography variant= "body2" sx= { subtitle }>{ iss.category }</Typography>
                                            <Typography variant= "body2" sx= { subtitle }>{ iss.serial_no ?? iss.model }</Typography>
                                        </Stack>
                                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                            <Typography sx= { title }>Issued to: { iss.issued_to }</Typography>
                                            { data.user_level !== 'user' ? <Typography sx= { title }>Issued by: { iss.issued_by }</Typography> : '' }
                                            <Typography variant= "body2" sx= { subtitle }>Date issued: { iss.date_issued }</Typography>
                                        </Stack>
                                    </Stack>
                                    <Box sx= { status(stats[iss.status]) }>{ (iss.status).charAt(0).toUpperCase() + (iss.status).slice(1) }</Box>
                                </Stack>
                            </Grid>) }
                    </Grid>
                : <Typography variant= "body2" color= "#636e72" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
        </Stack>
    );
}

export default Items;