// Libraries
import { Skeleton, Stack, TextareaAutosize, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Index = props => {
    const { label, fetching, disabled, name, uppercase, register, errors, ...others } = props;

    // Custom style
    const textarea = {
        border: 'solid 1px #ced6e0',
        borderRadius: '5px',
        fontFamily: 'Montserrat',
        fontSize: '105%',
        padding: '10px',
        outline: 'none',
        textTransform: uppercase ? 'uppercase' : '',
        color: '#353b48',
        transition: 'all 0.2s ease-in-out'
    }

    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "100px" /> : 
                <TextareaAutosize name= { name } minRows= { 4 } maxRows= { 4 } disabled= { disabled } style= { textarea } { ...register(name) } { ...others } /> }
            <Typography variant= "body2" color= "error.dark">{ errors[name]?.message }</Typography>
        </Stack>
    );
}

Index.defaultProps = { label: '', disabled: false, uppercase: true }
Index.propTypes = {
    label: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    uppercase: PropTypes.bool,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    others: PropTypes.object
}

export default Index;