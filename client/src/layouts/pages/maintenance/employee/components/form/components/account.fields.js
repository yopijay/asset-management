// Libraries
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Account = ({ fetching }) => {
    const { type } = useParams();
    const [ spass, setpass ] = useState(false);
    const [ scpass, setscpass ] = useState(false);

    return ([
        {
            grid: { xs: 12 },
            props: {
                name: 'email',
                label: '*Email',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: false
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'password',
                label: '*Password',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: false,
                type: !spass ? 'password' : 'text',
                InputProps: {
                    endAdornment: type !== 'view' ?
                        <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setpass(!spass) }>
                            { !spass ? <FontAwesomeIcon icon= { solid('eye') } /> : <FontAwesomeIcon icon= { solid('eye-slash') } /> }
                        </InputAdornment> : ''
                }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'confirm_password',
                label: '*Confirm Password',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: false,
                type: !scpass ? 'password' : 'text',
                InputProps: {
                    endAdornment: type !== 'view' ?
                        <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setscpass(!scpass) }>
                            { !scpass ? <FontAwesomeIcon icon= { solid('eye') } /> : <FontAwesomeIcon icon= { solid('eye-slash') } /> }
                        </InputAdornment> : ''
                }
            },
            type: 'textfield'
        },
    ])
}

export default Account;