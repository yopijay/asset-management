// Libraries
import { Stack, Typography } from "@mui/material";

// Core
import { history } from "core/api"; // API
import { getdate, useGet } from "core/function/global"; // Function

// Styles
const logs = {
    backgroundColor: '#FFFFFF',
    padding: '16px',
    borderRadius: '8px',
    border: 'solid 1px #F1F6F9',
    overflow: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

const Logs = () => {
    const { data: log, isFetching: fetching } = useGet({ key: ['rts_logs'], request: history({ table: 'tbl_routes', data: {} }), options: { refetchOnWindowFocus: false } }); 

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= { logs }>
            { !fetching ? 
                log?.length > 0 ? 
                    log?.map((data, index) => (
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" padding= "10px 12px" spacing= { 1 } key= { index }>
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                <Typography variant= "body2" color= "#b2bec3">{ getdate(new Date(data.date)).time } { getdate(new Date(data.date)).label }</Typography>
                                <Typography variant= "body2" color= "#b2bec3">{ getdate(new Date(data.date)).day }</Typography>
                            </Stack>
                            { data.action === 'update' ? 
                                <Typography color= "#636e72">
                                    { `${(data.action).charAt(0).toUpperCase() + (data.action).slice(1)} ${(data.field).replace('_', ' ')} of 
                                        ${(data.route).toLowerCase()} from '${data.previous !== null ? (data.previous).replace('_', ' ') : ''}' to 
                                        '${data.current !== null ? (data.current).replace('_', ' ') : ''}'.` }</Typography> :
                                <Typography color= "#636e72">
                                    { `${(data.route).charAt(0).toUpperCase() + ((data.route).slice(1)).toLowerCase()} ${(data.action).toLowerCase()}d.` }</Typography> }
                            <Typography variant= "body2" color= "#b2bec3">{ `${(data.action).charAt(0).toUpperCase() + (data.action).slice(1)}d by: ${data.ub_name}` }</Typography>
                        </Stack>
                    )) : <Typography textAlign= "center" variant= "body2" color= "#b2bec3">No record/s found!</Typography> : '' }
        </Stack>
    );
}

export default Logs;