// Libraries
import { Skeleton, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { IOSSwitch } from "../style";

const Export = props => {
    const { form, route, module } = props;
    
    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 2 }>
            <Typography variant= "body2" gutterBottom color= "#394867">Export</Typography>
            { form.fetching ? <Skeleton variant= "rounded" height= "26px" width= "42px" sx= {{ borderRadius: '13px' }} /> :
                <Controller control= { form.control } name= { `permission.${route.toLowerCase()}.${module.toLowerCase()}.export` } 
                    defaultValue= { form.getValues().permission !== undefined ? 
                                                form.getValues().permission[route.toLowerCase()] !== undefined ? 
                                                    form.getValues().permission[route.toLowerCase()][module.toLowerCase()] !== undefined ?
                                                        !form.getValues().permission[route.toLowerCase()][module.toLowerCase()].export ?? true
                                                        : true
                                                    : true
                                                : true }
                    render= { () => ( 
                        <IOSSwitch disabled= { false } 
                            checked= { form.getValues().permission !== undefined ? 
                                                form.getValues().permission[route.toLowerCase()] !== undefined ? 
                                                    form.getValues().permission[route.toLowerCase()][module.toLowerCase()] !== undefined ?
                                                        form.getValues().permission[route.toLowerCase()][module.toLowerCase()].export ?? true
                                                        : true
                                                    : true
                                                : true }

                            onChange= { () => form.setValue(`permission.${route.toLowerCase()}.${module.toLowerCase()}.export`, 
                                    !form.getValues().permission[route.toLowerCase()][module.toLowerCase()].export ?? true) } /> ) } /> }
        </Stack>
    );
}

export default Export;