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
                label: 'No. of keys',
                fetching: fetching,
                disabled: type === 'view',
                name: 'no_of_keys',
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
                control: control,
                name: 'type',
                label: 'Type',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'wireless', name: 'WIRELESS' }, { id: 'wired', name: 'WIRED' }],
                onChange: (e, item) => { setValue('type', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
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