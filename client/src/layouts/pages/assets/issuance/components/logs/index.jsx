// Libraries
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Core
import { FormCntxt } from "core/context/Form"; // Context

// Components
import Search from "./components/Search";
import Sort from "./components/Sort";

import { title } from "./style"; // Styles

const Index = () => {
    const [ logs, setlogs ] = useState([]);
    const { register, getValues } = useContext(FormCntxt);

    useEffect(() => {
        register('token', { value: sessionStorage.getItem })
    }, []);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 } sx= {{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 3 } component= { Link } to= { `/assets/issuance` } sx= {{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon= { solid('angle-left') } size= "lg" color= "#636e72" />
                <Typography sx= { title }>Logs</Typography>
            </Stack>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                <Search />
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%', overflow: 'hidden' }}>
                    <Sort />
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Index;