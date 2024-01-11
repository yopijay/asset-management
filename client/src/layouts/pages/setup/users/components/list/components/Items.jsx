// Libraries
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import { caption, listview, menu, status, subtitle, title } from "../style";

const Items = () => {
    const { list, listing } = useContext(ListCntxt);
    const { data } = useContext(AccountCntxt);

    let authupdate = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).setup.users.update);
    let authview = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).setup.users.view);
    let authpermission = data.user_level === 'superadmin' || (data.permission === null || JSON.parse(data.permission).setup.users.permission);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            { list.length > 0 ?
                listing === 'list' ?
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                        { list.map((data, index) => 
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "flex-start" sx= { listview } key= { index } spacing= { 4 }>
                                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                                    <Avatar variant= "rounded" src= { JSON.parse(data.profile) } sx= {{ border: 'solid 1px #F3F3F3', width: '60px', height: '60px' }} />
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                                        <Typography variant= "caption" sx= { caption }>{ data.employee_no }</Typography>
                                        <Typography sx= { title }>{ data.lname }, { data.fname }</Typography>
                                        <Typography sx= { subtitle } variant= "body2">{ data.company }</Typography>
                                        <Typography sx= { subtitle } variant= "body2">{ data.department } - { data.position }</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 } paddingLeft= "10px">
                                    <Box sx= { status(data.status) }>{ data.status === 1 ? `Active` : `Inactive` }</Box>
                                    <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { .5 }>
                                        { authpermission ? <Typography sx= { menu } component= { Link } to= { `/setup/users/permission/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('key') } />
                                            </Typography> : '' }
                                        { authupdate ? <Typography sx= { menu } component= { Link } to= { `/setup/users/form/update/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('pencil') } />
                                            </Typography> : '' }
                                        { authview ? <Typography sx= { menu } component= { Link } to= { `/setup/users/form/view/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('eye') } />
                                            </Typography> : '' }
                                    </Stack>
                                </Stack>
                            </Stack> ) }
                    </Stack> : 
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                        { list.map((data, index) => 
                            <Grid item xs= { 12 } sm= { 6 } md= { 4 } key= { index }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 } sx= { listview } 
                                    component= { authupdate ? Link : Stack } to= { `/setup/users/form/update/${data.id}` }>
                                    <Stack direction= "column" justifyContent= "center" alignItems= "center" spacing= { 2 }>
                                        <Avatar variant= "rounded" src= { JSON.parse(data.profile) } sx= {{ border: 'solid 1px #F3F3F3', width: '80px', height: '80px' }} />
                                        <Box sx= { status(data.status) }>{ data.status === 1 ? `Active` : `Inactive` }</Box>
                                    </Stack>
                                    <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                                            <Typography variant= "caption" sx= { caption }>{ data.employee_no }</Typography>
                                            <Typography sx= { title }>{ data.lname }, { data.fname }</Typography>
                                            <Typography sx= { subtitle } variant= "body2">{ data.company }</Typography>
                                            <Typography sx= { subtitle } variant= "body2">{ data.department } - { data.position }</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Grid>) }
                    </Grid>
                : <Typography variant= "body2" color= "#636e72" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
        </Stack>
    );
}

export default Items;