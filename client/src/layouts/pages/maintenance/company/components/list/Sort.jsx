// Libraries
import { useContext } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";

// Core
import { ListCntxt } from "core/context/List"; // Context

// Constants
import { orderby } from "./list.style"; // Styles

const Sort = () => {
    const { sort, setsort, listing, setlisting } = useContext(ListCntxt);

    return (
        <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                <Typography variant= "caption">Order by:</Typography>
                <Typography variant= "caption" sx= { orderby }>Date created</Typography>
            </Stack>
            <Typography onClick= { () => setsort(!sort) }>{ sort ? 
                                        <FontAwesomeIcon icon= { solid('arrow-down-a-z') } color= "#9DB2BF" /> : 
                                        <FontAwesomeIcon icon= { solid('arrow-down-z-a') } color= "#9DB2BF" /> }</Typography>
            <Typography onClick= { () => setlisting(!listing) }>{ listing ? 
                                        <FontAwesomeIcon icon= { solid('list') } color= "#9DB2BF" /> :
                                        <FontAwesomeIcon icon= { solid('grip') } color= "#9DB2BF" /> }</Typography>
        </Stack>
    );
}

export default Sort;