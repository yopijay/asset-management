// Libraries
import { Grid, Skeleton, Stack, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

// Core
import { series } from "core/api"; // API
import { formatter, useGet } from "core/function/global"; // Function

// Custom styles
const input = {
    border: 'solid 1px #ced6e0',
    padding: {
        xs: '10px 8px 8px 8px',
        md: '6px 10px 5px 10px'
    },
    borderRadius: '5px',
    transition: 'all 0.2s ease-in-out'
}

const Series = props => {
    const { fetching, register, errors, setValue } = props;
    const { type } = useParams();

    useGet({ key: ['stck_series'], request: series('tbl_stocks_issuance'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `ISS-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
            <Grid item xs= { 12 } md= { 4 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Typography variant= "body2" gutterBottom color= "#394867">*Series no.</Typography>
                    { fetching ? <Skeleton variant= "rounded" height= "35px" /> : 
                        <TextField name= "series_no" { ...register('series_no') } variant= "standard" disabled sx= { input } InputProps= {{ disableUnderline: true }} type= { type } /> }
                    <Typography variant= "body2" color= "error.dark">{ errors.series_no?.message }</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Series;