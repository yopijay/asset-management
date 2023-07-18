// Libraries
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";

// Core
import { GlobalCntxt } from "core/context/Global"; // Context
import { Components } from "core/constants/Navs"; // Navs

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
    const { active, setactive } = useContext(GlobalCntxt);
    
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            { Components.map((cmpnts, index) => (
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 } key= { index }>
                    <Typography variant= "caption" color= "#9BA4B5">{ cmpnts.label }</Typography>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                        { (cmpnts.components).map((nav, index) => (
                            <Typography key= { index } component= { Link } to= { nav.path } sx= { active === nav.name ? linkactive : link }
                                onClick= { () => { setactive(nav.name); localStorage.setItem('nav', nav.name); } }>{ nav.title }</Typography>
                        )) }
                    </Stack>
                </Stack>
            )) }
        </Stack>
    );
}

export default Navs;