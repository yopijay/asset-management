// Libraries
import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

// Styles
const title = {
    fontFamily: 'Montserrat Black',
    fontSize: '1.17rem',
    color: '#394867',
}

const Title = () => {
    const { category, brand } = useParams();

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            
        </Stack>
    )
}

export default Title;