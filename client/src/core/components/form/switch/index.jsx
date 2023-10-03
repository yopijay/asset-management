// Libraries
import styled from "@emotion/styled";
import { Skeleton, Stack, Switch, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

// Custom style
const IOSSwitch = 
    styled(props => ( <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} /> ))
    (({ theme }) => ({
            width: 42,
            height: 26,
            padding: 0,
            '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: 2,
                transitionDuration: '300ms',
                '&.Mui-checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + .MuiSwitch-track': { 
                        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#A0C49D', 
                        opacity: 1, 
                        border: 0, },
                    '&.Mui-disabled + .MuiSwitch-track': { opacity: 0.5 },
                },
                '&.Mui-focusVisible .MuiSwitch-thumb': { color: '#33cf4d', border: '6px solid #fff', },
                '&.Mui-disabled .MuiSwitch-thumb': { color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600], },
                '&.Mui-disabled + .MuiSwitch-track': { opacity: theme.palette.mode === 'light' ? 0.7 : 0.3, },
            },
            '& .MuiSwitch-thumb': { 
                boxSizing: 'border-box', 
                width: 22, 
                height: 22, },
            '& .MuiSwitch-track': {
                borderRadius: 26 / 2,
                backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
                opacity: 1,
                transition: theme.transitions.create(['background-color'], { duration: 500, }),
            }, 
        }
    ));

const Index = props => {
    const { label, fetching, disabled, name, control, getValues, ...others } = props;

    return (
        <Stack direction= "row" justifyContent= {{ xs: 'space-between', md: 'flex-start' }} alignItems= "center" spacing= { 2 }>
            <Typography variant= "body2" gutterBottom color= "#394867">{ label }</Typography>
            { fetching ? <Skeleton variant= "rounded" height= "26px" width= "42px" sx= {{ borderRadius: '13px' }} /> :
                <Controller control= { control } name= { name } defaultValue= { getValues()[name] !== null && getValues()[name] !== undefined ? getValues()[name] : true }
                    render= { () => ( 
                        <IOSSwitch checked= { getValues()[name] !== null && getValues()[name] !== undefined ? getValues()[name] : true } disabled= { disabled } { ...others } /> ) } /> }
        </Stack>
    );
}

Index.defaultProps = { label: '', disabled: false }
Index.propTypes = {
    label: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
    getValues: PropTypes.func.isRequired,
    others: PropTypes.object
}

export default Index;