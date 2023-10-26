// Libraries
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Laptop = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, getValues, setValue } = props;

    return([
        {
            grid: { xs: 12, sm: 8 },
            props: {
                register: register,
                label: 'Serial no',
                fetching: fetching,
                disabled: type === 'view',
                name: 'serial_no',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Model',
                fetching: fetching,
                disabled: type === 'view',
                name: 'model',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Warranty',
                fetching: fetching,
                disabled: type === 'view',
                name: 'warranty',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Quantity',
                fetching: fetching,
                disabled: type === 'view',
                name: 'quantity',
                errors: errors,
                type: 'number',
                InputProps: { disableUnderline: true },
                inputProps: { min: 1 }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Output capacity',
                fetching: fetching,
                disabled: type === 'view',
                name: 'output_capacity',
                errors: errors,
                InputProps: { disableUnderline: true },
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Input voltage',
                fetching: fetching,
                disabled: type === 'view',
                name: 'input_voltage',
                errors: errors,
                InputProps: { disableUnderline: true },
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Input frequency',
                fetching: fetching,
                disabled: type === 'view',
                name: 'input_frequency',
                errors: errors,
                InputProps: { disableUnderline: true },
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Input current',
                fetching: fetching,
                disabled: type === 'view',
                name: 'input_current',
                errors: errors,
                InputProps: { disableUnderline: true },
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Output voltage',
                fetching: fetching,
                disabled: type === 'view',
                name: 'output_voltage',
                errors: errors,
                InputProps: { disableUnderline: true },
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Output frequency',
                fetching: fetching,
                disabled: type === 'view',
                name: 'output_frequency',
                errors: errors,
                InputProps: { disableUnderline: true },
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Output current',
                fetching: fetching,
                disabled: type === 'view',
                name: 'output_current',
                errors: errors,
                InputProps: { disableUnderline: true },
            },
            type: 'textfield'
        }
    ]);
}

Laptop.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired
}

export default Laptop;