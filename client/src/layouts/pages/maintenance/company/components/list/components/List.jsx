// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { list, listinfo } from "../list.style"; // Styles

const List = ({ data }) => {

    return (
        <Stack sx= { list }>
            <Stack sx= { listinfo }>
                <Typography variant= "body2">{ data.series_no }</Typography>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" paddingLeft= "15px">
                    <Typography>{ data.name }</Typography>
                    <Typography variant= "caption">{ data.telephone }</Typography>
                </Stack>
            </Stack>
            <Typography>{ data.status }</Typography>
            <Stack padding= "0 10px">buttons</Stack>
        </Stack>
    );
}

export default List;