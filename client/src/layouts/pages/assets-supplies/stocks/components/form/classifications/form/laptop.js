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
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'CPU',
                fetching: fetching,
                disabled: type === 'view',
                name: 'cpu',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'GPU',
                fetching: fetching,
                disabled: type === 'view',
                name: 'gpu',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'HDD',
                fetching: fetching,
                disabled: type === 'view',
                name: 'hdd',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'SSD',
                fetching: fetching,
                disabled: type === 'view',
                name: 'ssd',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'RAM',
                fetching: fetching,
                disabled: type === 'view',
                name: 'ram',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                register: register,
                label: 'Operating system',
                fetching: fetching,
                disabled: type === 'view',
                name: 'operating_system',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
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
            grid: { xs: 12, sm: 3 },
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
            grid: { xs: 12, sm: 3 },
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
            grid: { xs: 6, sm: 4, md: 3 },
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
            grid: { xs: 6, sm: 4, md: 3 },
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
            grid: { xs: 6, sm: 4, md: 3 },
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
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'Bluetooth',
                fetching: fetching,
                disabled: type === 'view',
                name: 'bluetooth',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('bluetooth', !(getValues().bluetooth) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'Fingerprint',
                fetching: fetching,
                disabled: type === 'view',
                name: 'fingerprint',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('fingerprint', !(getValues().fingerprint) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'Web camera',
                fetching: fetching,
                disabled: type === 'view',
                name: 'webcam',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('webcam', !(getValues().webcam) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'Backlit keyboard',
                fetching: fetching,
                disabled: type === 'view',
                name: 'backlit_keyboard',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('backlit_keyboard', !(getValues().backlit_keyboard) ?? true)
            },
            type: 'switch'
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