// Libraries
import { Stack, Typography } from "@mui/material";

// Custom styles
const title = {
    fontFamily: 'Montserrat Black',
    fontSize: '1.4rem',
    color: '#394867',
}

const Title = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography sx= { title }>Department</Typography>
            <Typography variant= "caption" color= "#9BA4B5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                malesuada quam ut, vulputate massa.</Typography>
        </Stack>
    );
}

export default Title;