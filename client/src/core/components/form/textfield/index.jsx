// Libraries
import { Skeleton, Stack, TextField, Typography } from "@mui/material";

// Custom styles
const input = {
    border: 'solid 1px #ced6e0',
    padding: {
        xs: '10px 8px 8px 8px',
        md: '6px 10px 5px 10px'
    },
    borderRadius: '5px'
}

const Index = props => {
    const { label, fetching, disabled, name, error } = props;

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "35px" /> : 
                <TextField name= { name } variant= "standard" InputProps= {{ disableUnderline: true }}
                    disabled= { disabled } sx= { input } /> }
            <Typography variant= "body2" color= "error.dark">{ error }</Typography>
        </Stack>
    );
}

export default Index;