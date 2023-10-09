// Libraries
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Personal = props => {
    const { type } = useParams();
    const { register, fetching, errors } = props;

    return ([
        {
            grid: { xs: 12, md: 4 },
            props: {
                register: register,
                label: '*First name',
                fetching: fetching,
                disabled: type === 'view',
                name: 'fname',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                register: register,
                label: 'Middlename',
                fetching: fetching,
                disabled: type === 'view',
                name: 'mname',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                register: register,
                label: '*Last name',
                fetching: fetching,
                disabled: type === 'view',
                name: 'lname',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                label: 'Address',
                fetching: fetching,
                disabled: type === 'view',
                name: 'address',
                register: register,
                errors: errors
            },
            type: 'textarea'
        }
    ]);
}

Personal.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired
}

export default Personal;