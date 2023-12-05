// Libraries
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
    const { form, modules, name } = props;

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Typography sx= { title }>{ name }</Typography>
            <Box>
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                    { (modules).map((data, index) => 
                        <Grid item xs= { 12 } sm= { 4 } md= { 3 } key= { index }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= { card }>
                                <Typography sx= { subtitle }>{ data.name }</Typography>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                                    <List form= { form } route= { name } module= { data.name } />
                                    <Create form= { form } route= { name } module= { data.name } />
                                    <Update form= { form } route= { name } module= { data.name } />
                                    <View form= { form } route= { name } module= { data.name } />
                                    <Logs form= { form } route= { name } module= { data.name } />
                                    <Import form= { form } route= { name } module= { data.name } />
                                    <Export form= { form } route= { name } module= { data.name } />
                                </Stack>
                            </Stack>
                        </Grid>
                    ) }
                </Grid>
            </Box>
        </Stack>
    );
}

export default Modules;