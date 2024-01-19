// Libraries
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { orderby } from "../style"; // Styles

const Sort = props => {
    const { records, setValue, getValues } = props;
    const [ order, setorder ] = useState('date');
    const [ sort, setsort ] = useState('desc');

    let data = getValues();
    data['token'] = sessionStorage.getItem('token').split('.')[1];

    const onclick = name => { 
        setorder(name);
        setValue('logsorderby', name);
        data['logsorderby'] = name;
        records({ table: 'tbl_routes', data: data });
    }

    const onsort = sort => { 
        setsort(sort);
        setValue('logssort', sort);
        data['logssort'] = sort;
        records({ table: 'tbl_routes', data: data });
    }

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