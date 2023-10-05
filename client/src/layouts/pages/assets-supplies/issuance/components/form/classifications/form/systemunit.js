// Libraries
import PropTypes from "prop-types";

const SystemUnit = props => {
    const { register, fetching, errors, control, getValues, setValue } = props;

    return([
        {
            grid: { xs: 12, sm: 8 },
            props: {
                register: register,
                label: 'Serial no',
                fetching: fetching,
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                disabled: true,
                name: 'quantity',
                errors: errors,
                type: 'number',
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'HDMI',
                fetching: fetching,
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
                label: 'Wifi',
                fetching: fetching,
                disabled: true,
                name: 'wifi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('wifi', !(getValues().wifi) ?? true)
            },
            type: 'switch'
        }
    ]);
}

SystemUnit.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired
}

export default SystemUnit;