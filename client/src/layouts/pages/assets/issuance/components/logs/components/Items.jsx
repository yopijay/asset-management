// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { getdate } from "core/function/global"; // Function
import Loader from "core/components/loader/Screen"; // Loader

import { card, loader } from "../style";

const Items = ({ records, fetching }) => {
    const { data } = useContext(AccountCntxt);

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }} spacing= { 1 }>
            { !fetching ?
                records.length > 0 ?
                    records.map((iss, index) =>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 } key= { index } sx= { card }>
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                <Typography variant= "body2" color= "#b2bec3">{ getdate(new Date(iss.date)).time } { getdate(new Date(iss.date)).label }</Typography>
                                <Typography variant= "body2" color= "#b2bec3">{ getdate(new Date(iss.date)).day }</Typography>
                            </Stack>
                            { iss.action === 'update' ?
                                <Typography color= "#636e72">
                                    { `${(iss.action).charAt(0).toUpperCase() + (iss.action).slice(1)} ${(iss.field).replace('_', ' ')} of
                                        ${(iss.iss_series).toUpperCase()} from '${iss.previous !== null ? (iss.previous).replace('_', ' ') : ''}'
                                        to '${iss.current !== null ? (iss.current).replace('_', ' ') : ''}'.` }</Typography> :
                                <Typography color= "#636e72">
                                    { `${(iss.iss_series).toUpperCase()} ${(iss.action).toLowerCase()}d.` }</Typography> }
                            { data.user_level !== 'user' ? 
                                <Typography variant= "body2" color= "#b2bec3">{ `${(iss.action).charAt(0).toUpperCase() + (iss.action).slice(1)}d by: ${iss.ub_name}` }</Typography> : '' }
                        </Stack> ) :
                    <Typography variant= "body2" color= "#636e72" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> :
                <Box sx= { loader }><Loader /></Box> }
        </Stack>
    );
}

export default Items;