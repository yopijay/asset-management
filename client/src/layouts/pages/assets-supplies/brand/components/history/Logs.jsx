// Libraries
import { Stack, Typography } from "@mui/material";

// Core
import { history } from "core/api"; // API
import { getdate, useGet } from "core/function/global"; // Function

// Constants
const logs = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '15px',
    border: 'solid 1px #F1F6F9',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

const Logs = () => {
    const { data: log, isFetching: fetching } = useGet({ key: ['asb_logs'], request: history({ table: 'tbl_brands', data: {} }), options: { refetchOnWindowFocus: false } }); 

    return (
        <Stack sx= { logs } spacing= { 2 }>
            { !fetching ? 
                log?.length > 0 ? 
                    log?.map((data, index) => (
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" padding= "10px 12px" spacing= { 1 } key= { index }>
                            <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                <Typography variant= "body2" color= "#9DB2BF">{ getdate(new Date(data.date)).time } { getdate(new Date(data.date)).label }</Typography>
                                <Typography variant= "body2" color= "#9DB2BF">{ getdate(new Date(data.date)).day }</Typography>
                            </Stack>
                            { data.action === 'update' ? 
                                <Typography color= "#526D82">{ (data.action).toUpperCase() } { (data.field).toUpperCase() } OF { data.name } FROM { data.previous } TO { data.current }</Typography> :
                                <Typography color= "#526D82">{ (data.action).toUpperCase() } { (data.name).toUpperCase() }</Typography>}
                        </Stack>
                    )) : <Typography textAlign= "center" variant= "body2" color= "#9DB2BF">No record/s found!</Typography> : '' }
        </Stack>
    );
}

export default Logs;