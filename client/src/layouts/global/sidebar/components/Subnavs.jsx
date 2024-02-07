// Libraries
import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

// Core
import { GlobalCntxt } from "core/context/Global"; // Context
import { AccountCntxt } from "core/context/Account"; // Context

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

const Subnavs = ({ modules }) => {
    const { active, setactive, setopen } = useContext(GlobalCntxt);
    const { data } = useContext(AccountCntxt);

    const navclick = name => { setopen({ left: false }); setactive(name); localStorage.setItem('nav', name); }

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            { modules?.map((mdl, index) => 
                data.user_level === 'superadmin' || JSON.parse(data.permission)[(mdl.baseurl).toLowerCase()][(mdl.module).toLowerCase()]?.list ?
                    <Typography key= { index } component= { Link } to= { `/${mdl.baseurl}/${mdl.path} `} sx= { active === (mdl.module).toLowerCase() ? linkactive : link } 
                        onClick= { () => navclick((mdl.module).toLowerCase()) }>{ (mdl.module).charAt(0) + (mdl.module).slice(1).toLowerCase() }</Typography> : '' ) }
        </Stack>
    );
}

export default Subnavs;