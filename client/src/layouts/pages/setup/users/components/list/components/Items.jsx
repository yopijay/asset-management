// Libraries
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { ListCntxt } from "core/context/List"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

import { caption, listview, subtitle, title } from "../style";

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
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center" sx= { listview } key= { index }>
                                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                                    <Avatar variant= "rounded" src= { JSON.parse(data.profile) } sx= {{ border: 'solid 1px #F3F3F3', width: '60px', height: '60px' }} />
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                                        <Typography variant= "caption" sx= { caption }>{ data.employee_no }</Typography>
                                        <Typography sx= { title }>{ data.lname }, { data.fname }</Typography>
                                        <Typography sx= { subtitle } variant= "body2">{ data.company }</Typography>
                                        <Typography sx= { subtitle } variant= "body2">{ data.department } - { data.position }</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } paddingLeft= "10px">
                                    { data.status === 1 ? 
                                        <Box sx= {{ width: '10px', height: '10px', backgroundColor: '#A0C49D', borderRadius: '50px' }} /> : 
                                        <Box sx= {{ width: '10px', height: '10px', backgroundColor: '#FF6666', borderRadius: '50px' }} /> }
                                    <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1.5 }>
                                        { authpermission ? <Typography color= "#9BA4B5" component= { Link } to= { `/setup/users/permission/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('key') } size= "lg" />
                                            </Typography> : '' }
                                        { authupdate ? <Typography color= "#9BA4B5" component= { Link } to= { `/setup/users/form/update/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('pencil') } size= "lg" />
                                            </Typography> : '' }
                                        { authview ? <Typography color= "#9BA4B5" component= { Link } to= { `/setup/users/form/view/${data.id}` }>
                                                <FontAwesomeIcon icon= { solid('eye') } size= "lg" />
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
                                        { data.status === 1 ? 
                                            <Box sx= {{ padding: '3px 10px', fontSize: '75%', color: '#A0C49D', border: 'solid 1px #A0C49D' , borderRadius: '50px' }}>Active</Box> : 
                                            <Box sx= {{ padding: '3px 10px', fontSize: '75%', color: '#FF6666', border: 'solid 1px #FF6666' , borderRadius: '50px' }}>Inactive</Box> }
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
                : <Typography variant= "body2" color= "#9DB2BF" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> }
        </Stack>
    );
}

export default Items;