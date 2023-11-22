// Libraries
import React, { useContext, useState } from 'react'
import { Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Core
import { ListCntxt } from 'core/context/List'; // Context
import { FormCntxt } from 'core/context/Form'; // Context

import { orderby } from '../style';

const Sort = ({ refetch }) => {
    const { sort, setsort, listing, setlisting } = useContext(ListCntxt);
    const { getValues, setValue } = useContext(FormCntxt);
    const [ order, setorder ] = useState('usr.date_created');

    const onclick = name => { setValue('orderby', name); setorder(name); refetch({ table: 'tbl_users', data: getValues() }); }
    const onsort = sort => { setsort(sort); setValue('sort', sort); refetch({ table: 'tbl_users', data: getValues() }); }

    return (
        <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                <Typography variant= "caption">Order by:</Typography>
                { order === 'usr.date_created' ? <Typography variant= "caption" sx= { orderby } onClick= { () => onclick('info.lname') }>Date created</Typography> :
                    order === 'info.lname' ? <Typography variant= "caption" sx= { orderby } onClick= { () => onclick('info.employee_no') }>Last name</Typography> :
                        order === 'info.employee_no' ? <Typography variant= "caption" sx= { orderby } onClick= { () => onclick('usr.date_created') }>Employee no.</Typography> : '' }
            </Stack>
            { sort === 'desc' ? 
                <Typography sx= {{ cursor: 'pointer' }} onClick= { () => onsort('asc') }><FontAwesomeIcon icon= { solid('arrow-down-z-a') } color= "#9DB2BF" /></Typography> :
                <Typography sx= {{ cursor: 'pointer' }} onClick= { () => onsort('desc') }><FontAwesomeIcon icon= { solid('arrow-down-a-z') } color= "#9DB2BF" /></Typography> }
            { listing === 'list' ?
                <Typography sx= {{ cursor: 'pointer' }} onClick= { () => setlisting('grid') }><FontAwesomeIcon icon= { solid('grip') } color= "#9DB2BF" /></Typography> :
                <Typography sx= {{ cursor: 'pointer' }} onClick= { () => setlisting('list') }><FontAwesomeIcon icon= { solid('list') } color= "#9DB2BF" /></Typography> }
        </Stack>
    );
}

export default Sort;