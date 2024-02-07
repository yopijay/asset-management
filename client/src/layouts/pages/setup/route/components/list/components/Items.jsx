// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

// Style
import { caption, listview, menu, status, subtitle, title } from "../style";

const Items = () => {
    const { list, listing } = useContext(ListCntxt);
    const { data } = useContext(AccountCntxt);

    let authupdate = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).setup.route.update);
    let authview = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).setup.route.view);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            { list.length > 0 ?
                listing === 'list' ?
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                        { list.map((data, index) => 
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { listview } key= { index } spacing= { 4 }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                                    <Typography variant= "caption" sx= { caption }>{ data.series_no }</Typography>
                                    <Typography sx= { title }>{ data.route }</Typography>
                                    <Typography variant= "body2" sx= { subtitle }>Base URL: /{ data.base_url }</Typography>
                                </Stack>
                                <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 } paddingLeft= "10px">
                                    <Box sx= { status(data.status) }>{ data.status === 1 ? `Active` : `Inactive` }</Box>
                                    <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { .5 }>
                                        { authupdate ? <Typography sx= { menu } component= { Link } to= { `/setup/route/form/update/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('pencil') } />
                                            </Typography> : '' }
                                        { authview ? <Typography sx= { menu } component= { Link } to= { `/setup/route/form/view/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('eye') } />
                                            </Typography> : '' }
                                    </Stack>
                                </Stack>
                            </Stack> ) }
                    </Stack> : 
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                        { list.map((data, index) => 
                            <Grid item xs= { 12 } sm= { 6 } md= { 4 } key= { index }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= { listview } 
                                    component= { authupdate ? Link : Stack } to= { `/setup/route/form/update/${data.id}` } spacing= { 4 }>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                                        <Typography variant= "caption" sx= { caption }>{ data.series_no }</Typography>
                                        <Typography sx= { title }>{ data.route }</Typography>
                                        <Typography variant= "body2" sx= { subtitle }>Base URL: /{ data.base_url }</Typography>
                                    </Stack>
                                    <Stack direction= "row" justifyContent= "flex-end" alignItems= "center">
                                        <Box sx= { status(data.status) }>{ data.status === 1 ? `Active` : `Inactive` }</Box>
                                    </Stack>
                                </Stack>
                            </Grid>) }
                    </Grid>
                : <Typography variant= "body2" color= "#636e72" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
        </Stack>
    );
}

export default Items;