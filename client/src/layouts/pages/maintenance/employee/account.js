// Libraries
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Account = () => {
    const { type } = useParams();
    const [ spass, setspass ] = useState(false);
    const [ scpass, setscpass ] = useState(false);

    return ([
        {
            grid: { xs: 12, md: 7 },
            props: {
                name: 'email',
                label: '*Email',
                disabled: false,
                fetching: false,
                type: 'email',
                onchange: () => {}
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 7 },
            props: {
                name: 'password',
                label: '*Password',
                disabled: false,
                fetching: false,
                type: !spass ? 'password' : 'text',
                InputProps: {
                    endAdornment: type !== 'view' ?
                        <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setspass(!spass) }>
                            { !spass ? <FontAwesomeIcon icon= { solid('eye') } /> : <FontAwesomeIcon icon= { solid('eye-slash') } /> }
                        </InputAdornment> : ''
                },
                onchange: () => {}
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 7 },
            props: {
                name: 'confrim_password',
                label: '*Confirm Password',
                disabled: false,
                fetching: false,
                type: !scpass ? 'password' : 'text',
                InputProps: {
                    endAdornment: type !== 'view' ?
                        <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setscpass(!scpass) }>
                            { !scpass ? <FontAwesomeIcon icon= { solid('eye') } /> : <FontAwesomeIcon icon= { solid('eye-slash') } /> }
                        </InputAdornment> : ''
                },
                onchange: () => {}
            },
            type: 'textfield'
        },
    ]);
}

export default Account;