// Libraries
import { Skeleton, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { IOSSwitch } from "../style";

const View = props => {
    const { form, route, module } = props;
    
    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 2 }>
            <Typography variant= "body2" gutterBottom color= "#394867">View</Typography>
            { form.fetching ? <Skeleton variant= "rounded" height= "26px" width= "42px" sx= {{ borderRadius: '13px' }} /> :
                <Controller control= { form.control } name= { `permission.${route.toLowerCase()}.${module.toLowerCase()}.view` } 
                    defaultValue= { form.getValues().permission !== undefined ? 
                                                form.getValues().permission[route.toLowerCase()] !== undefined ? 
                                                    form.getValues().permission[route.toLowerCase()][module.toLowerCase()] !== undefined ?
                                                        !form.getValues().permission[route.toLowerCase()][module.toLowerCase()].view ?? false
                                                        : false
                                                    : false
                                                : false }
                    render= { () => ( 
                        <IOSSwitch disabled= { false } 
                            checked= { form.getValues().permission !== undefined ? 
                                                form.getValues().permission[route.toLowerCase()] !== undefined ? 
                                                    form.getValues().permission[route.toLowerCase()][module.toLowerCase()] !== undefined ?
                                                        form.getValues().permission[route.toLowerCase()][module.toLowerCase()].view ?? false
                                                        : false
                                                    : false
                                                : false }

                            onChange= { () => form.setValue(`permission.${route.toLowerCase()}.${module.toLowerCase()}.view`, 
                                    !form.getValues().permission[route.toLowerCase()][module.toLowerCase()].view ?? false) } /> ) } /> }
        </Stack>
    );
}

export default View;