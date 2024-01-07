// Libraries
import styled from "@emotion/styled";
import { Switch } from "@mui/material";

export const title = {
    color: '#636e72',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    fontSize: '95%',
    fontFamily: 'Montserrat SemiBold'
}

export const subtitle = {
    color: '#636e72',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    fontSize: '95%'
}

export const card = {
    backgroundColor: '#F9F9F9',
    padding: '16px',
    borderRadius: '8px'
}

export const IOSSwitch = 
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