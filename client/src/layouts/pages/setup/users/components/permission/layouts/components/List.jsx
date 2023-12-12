// Libraries
import { Skeleton, Stack } from "@mui/material";
import { Controller } from "react-hook-form";

import { IOSSwitch } from "../style";

const List = props => {
    const { disabled, setDisabled, control, fetching, getValues, setValue, route, module } = props;

    return (
        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 2 }>
            { fetching ? <Skeleton variant= "rounded" height= "26px" width= "42px" sx= {{ borderRadius: '13px' }} /> :
                <Controller control= { control } name= { `permission.${route.toLowerCase()}.${module.toLowerCase()}.list` } 
                    defaultValue= { getValues().permission !== null ? 
                                                getValues().permission[route.toLowerCase()] ? 
                                                    getValues().permission[route.toLowerCase()][module.toLowerCase()] ?
                                                        getValues().permission[route.toLowerCase()][module.toLowerCase()].list ?? false
                                                        : false
                                                    : false
                                                : false }
                    render= { () => ( 
                        <IOSSwitch disabled= { false } 
                            checked= { getValues().permission !== null ? 
                                                getValues().permission[route.toLowerCase()] ? 
                                                    getValues().permission[route.toLowerCase()][module.toLowerCase()] ?
                                                        getValues().permission[route.toLowerCase()][module.toLowerCase()].list ?? false
                                                        : false
                                                    : false
                                                : false }
                            onChange= { () => {
                                setDisabled({ ...disabled, 
                                                            [module.toLowerCase()]: (getValues().permission[route.toLowerCase()][module.toLowerCase()].list !== null ?
                                                                getValues().permission[route.toLowerCase()][module.toLowerCase()].list : false) });
                                setValue(`permission.${route.toLowerCase()}.${module.toLowerCase()}.list`, 
                                                    !(getValues().permission[route.toLowerCase()][module.toLowerCase()].list !== null ?
                                                        getValues().permission[route.toLowerCase()][module.toLowerCase()].list : false))
                            } } /> ) } /> }
                            
        </Stack>
    );
}

export default List;