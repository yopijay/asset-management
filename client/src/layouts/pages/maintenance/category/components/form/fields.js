// Libraries
import { useParams } from "react-router-dom";

// Core
import { formatter, useGet } from "core/function/global"; // Function
import { series } from "core/api"; // API

const Fields = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, getValues, setError } = props;

    useGet({ key: ['ctg_series'], request: series('tbl_category'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `CTG-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, md: 3 },
            props: {
                register: register,
                label: '*Series no.',
                fetching: fetching,
                disabled: true,
                name: 'series_no',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 3 },
            props: {
                control: control,
                name: 'type',
                label: '*Type',
                disabled: type !== 'new',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'assets', name: 'ASSETS' }, { id: 'products', name: 'PRODUCTS' }],
                onChange: (e, item) => { setError('type', { message: '' }); setValue('type', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                register: register,
                label: '*Name',
                fetching: fetching,
                disabled: type === 'view',
                name: 'name',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                label: 'Status',
                fetching: fetching,
                disabled: type === 'view',
                name: 'status',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('status', !(getValues().status) ?? true)
            },
            type: 'switch'
        }
    ]);
}

export default Fields;