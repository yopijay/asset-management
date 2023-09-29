// Libraries
import { Box, Stack, Typography } from "@mui/material";

// Constants
import { caption, list, subtitle, title } from "../../index.style"; // Styles

const List = ({ data }) => {

    return (
        <Stack sx= { list }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant= "caption" sx= { caption }>{ data?.series_no }</Typography>
                <Typography sx= { title }>{ (data?.serial_no ?? data?.model) ?? '-' }</Typography>
                <Typography sx= { subtitle } variant= "body2">{ ((data?.category)?.replace('_', ' '))?.toUpperCase() } - { data.brand }</Typography>
            </Stack>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } paddingLeft= "10px">
                { data.status === 1 ? 
                    <Box sx= {{ width: '10px', height: '10px', backgroundColor: '#A0C49D', borderRadius: '50px' }} /> : 
                    <Box sx= {{ width: '10px', height: '10px', backgroundColor: '#FF6666', borderRadius: '50px' }} /> }
            </Stack>
        </Stack>
    );
}

export default List;