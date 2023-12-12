// Libraries
import { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { card, subtitle, title } from "./style";

import List from "./components/List";
import Create from "./components/Create";
import Update from "./components/Update";
import View from "./components/View";
import Logs from "./components/Logs";
import Import from "./components/Import";
import Export from "./components/Export";

const Modules = props => {
    const { control, fetching, getValues, setValue, modules, name } = props;
    const [ isdisabled, setDisabled ] = useState({});

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Typography sx= { title }>{ name }</Typography>
            <Box>
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                    { (modules).map((data, index) => 
                        <Grid item xs= { 12 } sm= { 4 } md= { 3 } key= { index }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 } sx= { card }>
                                <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                    <Typography sx= { subtitle }>{ data.name }</Typography>
                                    <List disabled= { isdisabled } setDisabled= { setDisabled } control= { control } fetching= { fetching } getValues= { getValues } 
                                        setValue= { setValue } route= { name } module= { data.name } />
                                </Stack>
                                <Box>
                                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
                                        <Grid item xs= { 6 }>
                                            <Create disabled= { isdisabled }
                                                control= { control } 
                                                fetching= { fetching } 
                                                getValues= { getValues } 
                                                setValue= { setValue } 
                                                route= { name } 
                                                module= { data.name } />
                                        </Grid>
                                        <Grid item xs= { 6 }>
                                            <Update disabled= { isdisabled }
                                                control= { control } 
                                                fetching= { fetching } 
                                                getValues= { getValues } 
                                                setValue= { setValue }  
                                                route= { name } 
                                                module= { data.name } />
                                        </Grid>
                                        <Grid item xs= { 6 }>
                                            <View disabled= { isdisabled }
                                                control= { control } 
                                                fetching= { fetching } 
                                                getValues= { getValues } 
                                                setValue= { setValue }  
                                                route= { name } 
                                                module= { data.name } />
                                        </Grid>
                                        <Grid item xs= { 6 }>
                                            <Logs disabled= { isdisabled }
                                                control= { control } 
                                                fetching= { fetching } 
                                                getValues= { getValues } 
                                                setValue= { setValue }  
                                                route= { name } 
                                                module= { data.name } />
                                        </Grid>
                                        <Grid item xs= { 6 }>
                                            <Import disabled= { isdisabled }
                                                control= { control } 
                                                fetching= { fetching } 
                                                getValues= { getValues } 
                                                setValue= { setValue }  
                                                route= { name } 
                                                module= { data.name } />
                                        </Grid>
                                        <Grid item xs= { 6 }>
                                            <Export disabled= { isdisabled }
                                                control= { control } 
                                                fetching= { fetching } 
                                                getValues= { getValues } 
                                                setValue= { setValue }  
                                                route= { name } 
                                                module= { data.name } />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>
                        </Grid>
                    ) }
                </Grid>
            </Box>
        </Stack>
    );
}

export default Modules;