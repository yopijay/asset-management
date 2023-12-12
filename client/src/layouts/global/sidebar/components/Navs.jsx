// Libraries
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";

// Core
import { GlobalCntxt } from "core/context/Global"; // Context
import { AccountCntxt } from "core/context/Account"; // Context
import { useGet } from "core/function/global"; // Function
import { dropdown } from "core/api"; // API

import Subnavs from "./Subnavs";

// Custom styles
const link = {
    textDecoration: 'none',
    color: '#394867',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '4px',
    padding: '8px 10px',
    '&:hover': { color: '#A0C49D' }
}

const linkactive = {
    textDecoration: 'none',
    color: '#A0C49D',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '4px',
    padding: '8px 10px'
}

const Navs = () => {
    const { active, setactive, setopen } = useContext(GlobalCntxt);
    const { data } = useContext(AccountCntxt);
    const { data: routes, isFetching: fetching } = useGet({ key: ['rts_nav'], request: dropdown({ table: 'tbl_routes', data: { type: 'nav' } }), options: { refetchInterval: 1000 } });

    const checkValue = (obj, val) => {
        for (let key in obj) { if(obj[key].list === val) return true; }
        return false;
    }

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Typography variant= "caption" color= "#9BA4B5">Overview</Typography>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography component= { Link } to= "/" sx= { active === 'dashboard' ? linkactive : link }
                        onClick= { () => { setopen({ left: false }); setactive('dashboard'); localStorage.setItem('nav', 'dashboard'); } }>Dashboard</Typography>
                </Stack>
            </Stack>
            { !fetching && routes.length > 0 ?
                routes.map((rts, index) => 
                    data.user_level === 'superadmin' || checkValue(JSON.parse(data.permission)[(rts.route).toLowerCase()], true) ? 
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 } key= { index }>
                            <Typography variant= "caption" color= "#9BA4B5">{ (rts.route).charAt(0) + (rts.route).slice(1).toLowerCase() }</Typography>
                            <Subnavs id= { rts.id } />
                        </Stack> : '' ) : '' }
            { data.user_level === 'superadmin' ?
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                    <Typography variant= "caption" color= "#9BA4B5">Setup</Typography>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                        <Typography component= { Link } to= "/setup/users" sx= { active === 'users' ? linkactive : link }
                            onClick= { () => { setopen({ left: false }); setactive('users'); localStorage.setItem('nav', 'users'); } }>Users</Typography>
                        <Typography component= { Link } to= "/setup/route" sx= { active === 'route' ? linkactive : link }
                            onClick= { () => { setopen({ left: false }); setactive('route'); localStorage.setItem('nav', 'route'); } }>Route</Typography>
                        <Typography component= { Link } to= "/setup/modules" sx= { active === 'modules' ? linkactive : link }
                            onClick= { () => { setopen({ left: false }); setactive('modules'); localStorage.setItem('nav', 'modules'); } }>Modules</Typography>
                    </Stack>
                </Stack> : '' }
        </Stack>
    );
}

export default Navs;