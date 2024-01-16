// Libraries
import { Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Core
import { FormCntxt } from "core/context/Form"; // Context

import { orderby } from "../style"; // Styles

const Sort = () => {
    const [ order, setorder ] = useState('date');
    const [ sort, setsort ] = useState('desc');
    const { setValue } = useContext(FormCntxt);

    const onclick = name => { setValue('orderby', name); setorder(name); }
    const onsort = sort => { setsort(sort); setValue('sort', sort); }

    return (
        <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                <Typography variant= "caption" color= "#636e72">Order by:</Typography>
                { order === 'date' ? <Typography variant= "caption" sx= { orderby } onClick= { () => onclick('series_no') }>Date</Typography> :
                    order === 'series_no' ? <Typography variant= "caption" sx= { orderby } onClick= { () => onclick('date') }>Series no.</Typography> : '' }
            </Stack>
            { sort === 'desc' ? 
                <Typography sx= {{ cursor: 'pointer' }} onClick= { () => onsort('asc') }><FontAwesomeIcon icon= { solid('arrow-down-z-a') } color= "#636e72" /></Typography> :
                <Typography sx= {{ cursor: 'pointer' }} onClick= { () => onsort('desc') }><FontAwesomeIcon icon= { solid('arrow-down-a-z') } color= "#636e72" /></Typography> }
        </Stack>
    );
}

export default Sort;