// Libraries
import { useParams } from "react-router-dom";

// Core
import { formatter, useGet } from "core/function/global"; // Function
import { dropdown, series } from "core/api"; // API

const Fields = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, setError, getValues } = props;

    const { data: categories, isFetching: ctgfetching } = useGet({ key: ['ctg_dd'], request: dropdown({ table: 'tbl_category', data: {} }), options: { refetchOnWindowFocus: false } });
    useGet({ key: ['brd_series'], request: series('tbl_brands'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `BRD-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, sm: 12, md: 4 },
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
            grid: { xs: 12, sm: 6, md: 3 },
            props: {
                control: control,
                name: 'category_id',
                label: '*Category',
                disabled: type !== 'new',
                fetching: fetching,
                options: !ctgfetching ? categories : [],
                onChange: (e, item) => { setError('category_id', { message: '' }); setValue('category_id', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 6, md: 5 },
            props: {
                register: register,
                label: '*Brand',
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