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

const setups = [
    { name: 'users', label: 'Users' },
    { name: 'route', label: 'Route' },
    { name: 'modules', label: 'Modules' }
]

// Custom styles
const link = {
    textDecoration: 'none',
    color: '#636e72',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '4px',
    padding: '8px 10px',
    '&:hover': { color: '#e1705591' }
}

const linkactive = {
    textDecoration: 'none',
    color: '#e1705591',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '4px',
    padding: '8px 10px'
}

const Navs = () => {
    const { active, setactive, setopen } = useContext(GlobalCntxt);
    const { data } = useContext(AccountCntxt);
    const { data: routes, isFetching: fetching } = useGet({ key: ['rts_nav'], request: dropdown({ table: 'tbl_routes', data: { type: 'nav' } }), options: { refetchOnWindowFocus: false } });

    const checkValue = (obj, val) => {
        for (let key in obj) { if(obj[key].list === val) return true; }
        return false;
    }

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Typography variant= "caption" color= "#b2bec3">Overview</Typography>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography component= { Link } to= "/" sx= { active === 'dashboard' ? linkactive : link }
                        onClick= { () => { setopen({ left: false }); setactive('dashboard'); localStorage.setItem('nav', 'dashboard'); } }>Dashboard</Typography>
                </Stack>
            </Stack>
            { (data.user_level === 'superadmin' || data.permission !== null) && !fetching && routes.length > 0 ?
                routes.map((rts, index) => 
                    data.user_level === 'superadmin' || checkValue(JSON.parse(data.permission)[(rts.route).toLowerCase()], true) ? 
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 } key= { index }>
                            <Typography variant= "caption" color= "#b2bec3">{ (rts.route).charAt(0) + (rts.route).slice(1).toLowerCase() }</Typography>
                            <Subnavs id= { rts.id } />
                        </Stack> : '' ) : '' }
            { data.user_level === 'superadmin' || data.permission !== null ?
                data.user_level === 'superadmin' || checkValue(JSON.parse(data.permission).setup, true) ? 
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                        <Typography variant= "caption" color= "#b2bec3">Setup</Typography>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            { setups.map((stp, index) => 
                                data.user_level === 'superadmin' || JSON.parse(data.permission).setup[(stp.name).toLowerCase()].list ? 
                                        <Typography component= { Link } to= { `/setup/${stp.name}` } sx= { active === stp.name ? linkactive : link } key= { index }
                                            onClick= { () => { setopen({ left: false }); setactive(stp.name); localStorage.setItem('nav', stp.name); } }>{ stp.label }</Typography> : ''
                            ) }
                        </Stack>
                    </Stack> : '' : '' }
        </Stack>
    );
}

export default Navs;