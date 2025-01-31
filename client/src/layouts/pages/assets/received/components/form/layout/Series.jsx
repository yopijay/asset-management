// Libraries
import { Grid, Skeleton, Stack, TextField, Typography } from "@mui/material";

// Core
import { formatter, useGet } from "core/function/global";
import { series } from "core/api";

import { input } from "../style";

const Series = props => {
    const { fetching, register, type, errors, setValue } = props;
    useGet({ key: ['stck_series'], 
                    request: series('tbl_stocks_issuance'), 
                    options: { refetchInterval: 1000 }, 
                    onSuccess: data => { if(type === 'new') setValue('series_no', `ISS-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
            <Grid item xs= { 12 } md= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography variant= "body2" gutterBottom color= "#636e72">*Series no.</Typography>
                    { fetching ? <Skeleton variant= "rounded" height= "35px" /> : 
                        <TextField name= "series_no" { ...register('series_no') } variant= "standard" disabled sx= { input } InputProps= {{ disableUnderline: true }} type= { type } /> }
                    <Typography variant= "body2" color= "error.dark">{ errors.series_no?.message }</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Series;