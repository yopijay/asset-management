// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

// Constants
import { caption, list, subtitle, title } from "../list.style"; // Styles

const List = ({ data }) => {

    return (
        <Stack sx= { list }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant= "caption" sx= { caption }>{ data.series_no }</Typography>
                {/* <Typography sx= { title }>{ data.name }</Typography> */}
                {/* <Typography variant= "body2" sx= { subtitle }>Base URL: /{ data.base_url }</Typography> */}
            </Stack>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } paddingLeft= "10px">
                { data.status === 1 ? 
                    <Box sx= {{ width: '10px', height: '10px', backgroundColor: '#A0C49D', borderRadius: '50px' }} /> : 
                    <Box sx= {{ width: '10px', height: '10px', backgroundColor: '#FF6666', borderRadius: '50px' }} /> }
                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1.5 }>
                    <Typography color= "#9BA4B5" component= { Link } to= { `/assets-supplies/brand/form/update/${data.id}` }><FontAwesomeIcon icon= { solid('pencil') } size= "lg" /></Typography>
                    <Typography color= "#9BA4B5" component= { Link } to= { `/assets-supplies/brand/form/view/${data.id}` }><FontAwesomeIcon icon= { solid('eye') } size= "lg" /></Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default List;