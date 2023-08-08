// Libraries
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";

// Core
import { GlobalCntxt } from "core/context/Global"; // Context
import { useGet } from "core/function/global";
import { dropdown } from "core/api";
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
    const { data: module, isFetching: fetching } = useGet({ key: ['mdl_nav'], request: dropdown({ table: 'tbl_module', data: { type: 'nav' } }), options: { refetchOnWindowFocus: false } });

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Typography variant= "caption" color= "#9BA4B5">Overview</Typography>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography component= { Link } to= "/" sx= { active === 'dashboard' ? linkactive : link }
                        onClick= { () => { setopen({ left: false }); setactive('dashboard'); localStorage.setItem('nav', 'dashboard'); } }>Dashboard</Typography>
                </Stack>
            </Stack>
            { !fetching && module.length > 0 ?
                module.map((mdl, index) => 
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 } key= { index }>
                        <Typography variant= "caption" color= "#9BA4B5">{ (mdl.name).charAt(0) + (mdl.name).slice(1).toLowerCase() }</Typography>
                        <Subnavs id= { mdl.id } />
                    </Stack> ) : '' }
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Typography variant= "caption" color= "#9BA4B5">Setup</Typography>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography component= { Link } to= "/setup/module" sx= { active === 'module' ? linkactive : link }
                        onClick= { () => { setopen({ left: false }); setactive('module'); localStorage.setItem('nav', 'module'); } }>Module</Typography>
                    <Typography component= { Link } to= "/setup/sub-module" sx= { active === 'sub-module' ? linkactive : link }
                        onClick= { () => { setopen({ left: false }); setactive('sub-module'); localStorage.setItem('nav', 'sub-module'); } }>Sub module</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Navs;