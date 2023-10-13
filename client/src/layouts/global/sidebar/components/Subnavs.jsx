// Libraries
import { Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Core
import { dropdown } from "core/api"; // API
import { GlobalCntxt } from "core/context/Global"; // Context
import { usePost } from "core/function/global"; // Function

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

const Subnavs = ({ id }) => {
    const { active, setactive, setopen } = useContext(GlobalCntxt);
    const [ submodule, setSubmodule ] = useState([]);
    const { mutate: nav } = usePost({ request: dropdown, onSuccess: data => setSubmodule(data) });

    const navclick = name => { setopen({ left: false }); setactive(name); localStorage.setItem('nav', name); }
    useEffect(() => { setInterval(() => { nav({ table: 'tbl_sub_module', data: { type: 'nav', id: id }}) }, 1000) } , [ nav, id ]);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            { submodule?.map((sub, index) => 
                    <Typography key= { index } component= { Link } to= { `/${sub.base_url}/${sub.path} `} sx= { active === (sub.name).toLowerCase() ? linkactive : link } 
                        onClick= { () => navclick((sub.name).toLowerCase()) }>{ (sub.name).charAt(0) + (sub.name).slice(1).toLowerCase() }</Typography> ) }
        </Stack>
    );
}

export default Subnavs;