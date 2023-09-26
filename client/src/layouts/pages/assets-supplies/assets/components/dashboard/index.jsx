// Libraries
import { Grid, Stack } from "@mui/material";
import { useContext } from "react";

// Core
import { ListCntxt } from "core/context/List";

// Components
import Title from "./Title";

// Constants
import { content, items } from "./index.style"; // Styles

const Index = () => {
    const { setlist } = useContext(ListCntxt);

    return (
        <Stack sx= { content } spacing= { 5 }>
            <Title />
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } flexGrow= { 1 } sx= {{ overflow: 'hidden' }}>
                <Stack sx= { items } spacing= { 2 }>
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Grid item xs= { 4 }>
                            <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= {{ backgroundColor: '#ffffff', width: '100%', height: '100%', padding: '15px 20px', borderRadius: '7px' }}>
                                asd
                            </Stack>
                        </Grid>
                        <Grid item xs= { 4 }>
                            <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= {{ backgroundColor: '#ffffff', width: '100%', height: '100%', padding: '15px 20px', borderRadius: '7px' }}>
                                asd
                            </Stack>
                        </Grid>
                        <Grid item xs= { 4 }>
                            <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= {{ backgroundColor: '#ffffff', width: '100%', height: '100%', padding: '15px 20px', borderRadius: '7px' }}>
                                asd
                            </Stack>
                        </Grid>
                        <Grid item xs= { 4 }>
                            <Stack direction= "column" justifyContent= "center" alignItems= "center" sx= {{ backgroundColor: '#ffffff', width: '100%', height: '100%', padding: '15px 20px', borderRadius: '7px' }}>
                                asd
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Index;