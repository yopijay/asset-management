// Libraries
import { useContext } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";

// Core
import { ListCntxt } from "core/context/List"; // Context

// Constants
import { orderby } from "./list.style"; // Styles
import { FormCntxt } from "core/context/Form";

const Sort = ({ refetch }) => {
    const { sort, setsort, listing, setlisting } = useContext(ListCntxt);
    const { getValues, setValue } = useContext(FormCntxt);

    return (
        <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 1 }>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                <Typography variant= "caption">Order by:</Typography>
                <Typography variant= "caption" sx= { orderby }>Date created</Typography>
            </Stack>
            { sort === 'desc' ? 
                <Typography sx= {{ cursor: 'pointer' }} 
                    onClick= { () => { setsort('asc'); setValue('sort', 'asc'); refetch({ table: 'tbl_company', data: getValues() }); } }>
                    <FontAwesomeIcon icon= { solid('arrow-down-z-a') } color= "#9DB2BF" /></Typography> :
                <Typography sx= {{ cursor: 'pointer' }} 
                    onClick= { () => { setsort('desc'); setValue('sort', 'desc'); refetch({ table: 'tbl_company', data: getValues() }); } }>
                    <FontAwesomeIcon icon= { solid('arrow-down-a-z') } color= "#9DB2BF" /></Typography> }
            { listing === 'list' ?
                <Typography sx= {{ cursor: 'pointer' }} onClick= { () => setlisting('grid') }><FontAwesomeIcon icon= { solid('grip') } color= "#9DB2BF" /></Typography> :
                <Typography sx= {{ cursor: 'pointer' }} onClick= { () => setlisting('list') }><FontAwesomeIcon icon= { solid('list') } color= "#9DB2BF" /></Typography> }
        </Stack>
    );
}

export default Sort;