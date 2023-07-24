// Libraries
import { Skeleton, Stack, TextareaAutosize, Typography } from "@mui/material";

// Custom style
const textarea = {
    border: 'solid 1px #ced6e0',
    borderRadius: '5px',
    fontFamily: 'Gilroy Light',
    fontSize: '105%',
    padding: '10px',
    outline: 'none',
    textTransform: 'uppercase',
    color: '#353b48'
}

const Index = props => {
    const { label, fetching, disabled, name, error } = props;

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "100px" /> : 
                <TextareaAutosize name= { name } minRows= { 4 } maxRows= { 4 } disabled= { disabled } style= { textarea } /> }
            <Typography variant= "body2" color= "error.dark">{ error }</Typography>
        </Stack>
    );
}

export default Index;