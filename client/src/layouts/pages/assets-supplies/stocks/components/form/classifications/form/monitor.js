// Libraries
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Monitor = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, getValues, setValue } = props;

    return ([
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
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'Panel',
                fetching: fetching,
                disabled: type === 'view',
                name: 'panel',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                register: register,
                label: 'Resolution',
                fetching: fetching,
                disabled: type === 'view',
                name: 'resolution',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                register: register,
                label: 'Color',
                fetching: fetching,
                disabled: type === 'view',
                name: 'color',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Power supply',
                fetching: fetching,
                disabled: type === 'view',
                name: 'power_supply',
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
            grid: { xs: 6, sm: 4 },
            props: {
                label: 'HDMI',
                fetching: fetching,
                disabled: type === 'view',
                name: 'hdmi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('hdmi', !(getValues().hdmi) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4 },
            props: {
                label: 'VGA',
                fetching: fetching,
                disabled: type === 'view',
                name: 'vga',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('vga', !(getValues().vga) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4 },
            props: {
                label: 'DVI',
                fetching: fetching,
                disabled: type === 'view',
                name: 'dvi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('dvi', !(getValues().dvi) ?? true)
            },
            type: 'switch'
        }
    ]);
}

Monitor.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired
}

export default Monitor;