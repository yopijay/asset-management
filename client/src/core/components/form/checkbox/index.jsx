// Libraries
import { Checkbox, Skeleton, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const Index = props => {
    const { label, fetching, disabled, name, onchange, control, getValues, setValue } = props;

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "1.7em" width= "1.7em" /> : 
                <Controller control= { control } name= { name } defaultValue= { getValues()[name] ?? true }
                    render= { ({ field: { onChange } }) => (
                        <Checkbox sx= {{ color: '#d5d5d5', '&.Mui-checked': { color: '#A0C49D' } }} disabled= { disabled }
                            checked= { getValues()[name] ?? true } 
                            onChange= { e => { setValue(name, getValues()[name] ?? true); onChange(e.target.checked); onchange(e); } } />
                    ) } /> }
        </Stack>
    );
}

Index.defaultProps = { label: '', disabled: false }
Index.propTypes = {
    label: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    control: PropTypes.object.isRequired,
    getValues: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired
}

export default Index;