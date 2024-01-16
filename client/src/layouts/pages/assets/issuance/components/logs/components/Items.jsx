// Libraries
import { Box, Stack, Typography } from "@mui/material";

// Core
import { getdate } from "core/function/global"; // Function
import Loader from "core/components/loader/Screen"; // Loader

import { loader } from "../style";

const Items = ({ records, fetching }) => {

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
            { !fetching ?
                records.length > 0 ?
                '' :
                <Typography variant= "body2" color= "#636e72" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> :
                <Box sx= { loader }><Loader /></Box> }
            {/* { records.length > 0 ?
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                    { records?.map((data, index) => (
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" padding= "10px 12px" spacing= { 1 } key= { index }>
                            { console.log(data) }
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                <Typography variant= "body2" color= "#b2bec3">{ getdate(new Date(data.date)).time } { getdate(new Date(data.date)).label }</Typography>
                                <Typography variant= "body2" color= "#b2bec3">{ getdate(new Date(data.date)).day }</Typography>
                            </Stack>
                            { data.action === 'update' ?
                                <Typography color= "#636e72">
                                    { `${(data.action).charAt(0).toUpperCase() + (data.action).slice(1)} ${(data.field).replace('_', ' ')} of
                                        ${(data.iss_series).toUpperCase()} from '${data.previous !== null ? (data.previous).replace('_', ' ') : ''}'
                                        to '${data.current !== null ? (data.current).replace('_', ' ') : ''}'.` }</Typography> :
                                <Typography color= "#636e72">
                                    { `${(data.iss_series).toUpperCase()} ${(data.action).toLowerCase()}d.` }</Typography> }
                            <Typography variant= "body2" color= "#b2bec3">{ `${(data.action).charAt(0).toUpperCase() + (data.action).slice(1)}d by: ${data.ub_name}` }</Typography>
                        </Stack>
                    )) }
                </Stack> :
                <Typography variant= "body2" color= "#636e72" bgcolor= "#FFFFFF" textAlign= "center" paddingY= "10px" borderRadius= { 2 }>No record/s found!</Typography> } */}
        </Stack>
    );
}

export default Items;