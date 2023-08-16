// Libraries
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Constants
import { caption, list, subtitle, title } from "../../index.style"; // Styles

const Grids = ({ data }) => {

    return (
        <Stack sx= { list } component= { Link } to= { `/maintenance/employee/form/update/${data.id}` }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant= "caption" sx= { caption }>{ data.employee_no }</Typography>
                <Typography sx= { title }>{ data.lname }, { data.fname }</Typography>
                <Typography sx= { subtitle } variant= "body2">{ data.company }</Typography>
                <Typography sx= { subtitle } variant= "body2">{ data.department }</Typography>
                <Typography sx= { subtitle } variant= "body2">{ data.position }</Typography>
            </Stack>
            <Box paddingLeft= "15px">
                { data.status === 1 ? 
                    <Box sx= {{ width: '10px', height: '10px', backgroundColor: '#A0C49D', borderRadius: '50px' }} /> : 
                    <Box sx= {{ width: '10px', height: '10px', backgroundColor: '#FF6666', borderRadius: '50px' }} /> }
            </Box>
        </Stack>
    );
}

export default Grids;