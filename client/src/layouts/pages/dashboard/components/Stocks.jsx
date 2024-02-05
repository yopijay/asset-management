// Libraries
import { Stack, Typography } from "@mui/material";

// Styles
import { category, ctgy, qty, stockcontainer } from "../style";
import { Link } from "react-router-dom";

const Stocks = props => {
    const { stck, stckfetching } = props;

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Stack direction= "row" justifyContent= "flex-end" alignItems= "center">
                <Typography variant= "body2" component= { Link } to= "/assets/stocks" sx= {{ textDecoration: 'none' }}>View all</Typography>
            </Stack>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= { stockcontainer }>
                { !stckfetching ? 
                    (stck.percategory).map((stck, index) => 
                        <Stack direction= "row" justifyContent= "space-between" alignItems= "center" key= { index } sx= { category } spacing= { 3 }>
                            <Typography sx= { ctgy }>{ stck.name }</Typography>
                            <Typography sx= { qty }>{ stck.quantity }</Typography>
                        </Stack>) : '' }
            </Stack>
        </Stack> 
    );
}

export default Stocks;