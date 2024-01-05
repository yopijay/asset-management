// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";

// Core
import { AccountCntxt } from "core/context/Account"; // Context
import { useGet } from "core/function/global"; // Function
import { dashboard } from "core/api"; // API

// Styles
import { category, ctgy, label, qty, stockcontainer } from "../style";

const Stocks = () => {
    const { data } = useContext(AccountCntxt);
    const { data: stocks, isFetching: fetching } = useGet({ key: ['stocks'], request: dashboard({ type: 'stocks', data: data }), options: { refetchInterval: 1000 } });

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography sx= { label }>Assets per Category</Typography>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } sx= { stockcontainer }>
                { !fetching ?
                    stocks.map((data, index) => 
                        data.name !== 'toner' ?
                            <Stack sx= { category } key= { index } direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                                <Stack direction= "row" justifyContent= "space-between" alignItems= "center">
                                    <Typography sx= { ctgy }>{ (data.name).charAt(0).toUpperCase() + (data.name).slice(1) }</Typography>
                                    <Typography sx= { qty }>{ data.quantity }</Typography>
                                </Stack>
                                <Box>
                                    <Grid container direction= "row" justifyContent= "center" alignItems= "center" spacing= { 2 }>
                                        <Grid item xs= { 6 }>
                                            <Stack direction= "column" justifyContent= "center" alignItems= "center">
                                                <Typography variant= "caption" color= "#A0C49D">On-hand</Typography>
                                                <Typography variant= "h6" color= "#61677A">{ data.onhand }</Typography>
                                            </Stack>
                                            </Grid>
                                        <Grid item xs= { 6 }>
                                            <Stack direction= "column" justifyContent= "center" alignItems= "center">
                                                <Typography variant= "caption" color= "#FF6666">Issued</Typography>
                                                <Typography variant= "h6" color= "#61677A">{ data.issued }</Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack> : '' ) : '' }
            </Stack>
        </Stack>
    );
}

export default Stocks;