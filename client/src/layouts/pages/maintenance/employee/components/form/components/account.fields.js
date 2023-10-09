// Libraries
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Account = props => {
    const { type } = useParams();
    const [ spass, setpass ] = useState(false);
    const [ scpass, setscpass ] = useState(false);
    const { register, fetching, errors } = props;

    return ([
        {
            grid: { xs: 12 },
            props: {
                register: register,
                label: '*Email',
                fetching: fetching,
                disabled: type === 'view',
                name: 'email',
                errors: errors,
                uppercase: false,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                register: register,
                label: '*Password',
                fetching: fetching,
                disabled: type === 'view',
                name: 'password',
                errors: errors,
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
                register: register,
                label: '*Confirm Password',
                fetching: fetching,
                disabled: type === 'view',
                name: 'confirm_password',
                errors: errors,
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
        }
    ])
}

Account.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired
}

export default Account;