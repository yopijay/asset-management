// Libraries
import { Stack, Typography } from "@mui/material";

// Styles
const title = {
    fontFamily: 'Montserrat Black',
    fontSize: '1.17rem',
    color: '#636e72',
}

const Title = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography sx= { title }>Department</Typography>
            <Typography variant= "caption" color= "#b2bec3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque molestie, 
                malesuada quam ut, vulputate massa.</Typography>
        </Stack>
    );
}

export default Title;