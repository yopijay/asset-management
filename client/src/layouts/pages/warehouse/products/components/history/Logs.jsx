// Libraries
import { Stack, Typography } from "@mui/material";
import { useState } from "react";

// Constants
import { logs } from "../../screens/desktop/index.style"; // Styles

const Logs = () => {
    const [ log, setlogs ] = useState([]);

    return (
        <Stack sx= { logs } spacing= { 2 }>
            { log.length > 0 ? 
                log.map((data, index) => (
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" padding= "10px 12px" spacing= { 1 } key= { index }>
                        <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                            <Typography variant= "body2" color= "#9DB2BF">2:00 PM</Typography>
                            <Typography variant= "body2" color= "#9DB2BF">07-20-2023</Typography>
                        </Stack>
                        <Typography color= "#526D82">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mollis eros.</Typography>
                    </Stack>
                )) :
                <Typography textAlign= "center" variant= "body2" color= "#9DB2BF">No record/s found!</Typography> }
        </Stack>
    );
}

export default Logs;