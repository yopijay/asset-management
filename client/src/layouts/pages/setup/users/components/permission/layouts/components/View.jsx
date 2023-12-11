// Libraries
import { Skeleton, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { IOSSwitch } from "../style";

const View = props => {
    const { disabled, control, fetching, getValues, setValue, route, module } = props;
    
    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 2 }>
            <Typography variant= "body2" gutterBottom color= "#394867">View</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "26px" width= "42px" sx= {{ borderRadius: '13px' }} /> :
                <Controller control= { control } name= { `permission.${route.toLowerCase()}.${module.toLowerCase()}.view` } 
                    defaultValue= { getValues().permission !== null ? 
                                                getValues().permission?.[route.toLowerCase()] ? 
                                                    getValues().permission[route.toLowerCase()][module.toLowerCase()].view ?? false : 
                                                    false 
                                                : false }
                    render= { () => ( 
                        <IOSSwitch disabled= { disabled?.[module.toLowerCase()] ?? true }
                            checked= { getValues().permission !== null ? 
                                                getValues().permission?.[route.toLowerCase()] ? 
                                                    getValues().permission[route.toLowerCase()][module.toLowerCase()].view ?? false : 
                                                    false 
                                                : false }
                            onChange= { () => setValue(`permission.${route.toLowerCase()}.${module.toLowerCase()}.view`, 
                                    !getValues().permission[route.toLowerCase()][module.toLowerCase()].view ?? false) } /> ) } /> }
        </Stack>
    );
}

export default View;