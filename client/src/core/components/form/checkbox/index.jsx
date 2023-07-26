// Libraries
import { useContext } from "react";
import { Checkbox, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

// Core
import { FormCntxt } from "core/context/Form"; // Context

const Index = props => {
    const { label, fetching, disabled, name } = props;
    const { control, getValues, setValue } = useContext(FormCntxt);

    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            <Controller control= { control } name= { name } defaultValue= { getValues()[name] ?? true }
                render= { ({ field: { onChange } }) => (
                    <Checkbox sx= {{ color: '#d5d5d5', '&.Mui-checked': { color: '#A0C49D' } }} disabled= { disabled }
                        checked= { getValues()[name] ?? true } onChange= { e => { setValue(name, getValues()[name] ?? true); onChange(e.target.checked); } } />
                ) } />
        </Stack>
    );
}

export default Index;