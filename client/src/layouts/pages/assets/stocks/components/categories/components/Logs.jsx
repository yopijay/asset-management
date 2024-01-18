// Libraries
import { Stack, Typography } from "@mui/material";

// Core
import { history } from "core/api"; // API
import { AccountCntxt } from "core/context/Account";
import { getdate, useGet } from "core/function/global"; // Function
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Styles
const logs = {
    backgroundColor: '#FFFFFF',
    padding: '16px',
    borderRadius: '8px',
    border: 'solid 1px #F1F6F9',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

const Logs = () => {
    const { data } = useContext(AccountCntxt);
    const { category } = useParams();
    const { data: log, isFetching: fetching } = 
        useGet({ key: ['assts_logs'], 
                        request: history({ table: 'tbl_stocks', data: { category: category, logsorderby: 'date', logssort: 'desc', limit: '3', token: (sessionStorage.getItem('token')).split('.')[1], logssearchtxt: '' } }), 
                        options: { refetchOnWindowFocus: false } });

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= { logs }>
            { !fetching ? 
                log?.length > 0 ? 
                    log?.map((lgs, index) => (
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" padding= "10px 12px" spacing= { 1 } key= { index }>
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                <Typography variant= "body2" color= "#b2bec3">{ getdate(new Date(lgs.date)).time } { getdate(new Date(lgs.date)).label }</Typography>
                                <Typography variant= "body2" color= "#b2bec3">{ getdate(new Date(lgs.date)).day }</Typography>
                            </Stack>
                            { lgs.action === 'update' ? 
                                <Typography color= "#636e72">
                                    { `${(lgs.action).charAt(0).toUpperCase() + (lgs.action).slice(1)} ${(lgs.field).replace('_', ' ')} of 
                                        ${(lgs.model ?? lgs.serial_no).toUpperCase()} from '${lgs.previous !== null ? (lgs.previous).replace('_', ' ') : ''}'
                                        to '${lgs.current !== null ? (lgs.current).replace('_', ' ') : ''}'.` }</Typography> : 
                                <Typography color= "#636e72">
                                    { `${(lgs.model ?? lgs.serial_no).toUpperCase()} ${(lgs.action).toLowerCase()}d.` }</Typography> }
                            { data.user_level !== 'user' ? 
                                <Typography variant= "body2" color= "#b2bec3">{ `${(lgs.action).charAt(0).toUpperCase() + (lgs.action).slice(1)}d by: ${lgs.ub_name}` }</Typography> : '' }
                        </Stack>
                    )) : <Typography textAlign= "center" variant= "body2" color= "#b2bec3">No record/s found!</Typography> : '' }
        </Stack>
    );
}

export default Logs;