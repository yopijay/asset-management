// Libraries
import { useParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";

// Core
import { dropdown, series } from "core/api"; // API
import { formatter, useGet } from "core/function/global"; // Function

const Fields = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, setError, getValues } = props;

    const { data: routes, isFetching: ddfetching } = useGet({ key: ['rts_dd'], request: dropdown({ table: 'tbl_routes', data: {} }), options: { refetchOnWindowFocus: false } });
    useGet({ key: ['mdl_series'], request: series('tbl_modules'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `MDL-${formatter(parseInt(data.length) + 1, 7)}`) } });
    
    return ([
        {
            grid: { xs: 12, sm: 6, md: 7 },
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
            grid: { xs: 12, sm: 6, md: 5 },
            props: {
                control: control,
                name: 'route_id',
                label: '*Route',
                disabled: type === 'view',
                fetching: fetching,
                options: !ddfetching ? routes : [],
                onChange: (e, item) => { setError('route_id', { message: '' }); setValue('route_id', item.id); setValue('route', item.base_url); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: '*Module',
                fetching: fetching,
                disabled: type === 'view',
                name: 'name',
                errors: errors,
                InputProps: { disableUnderline: true },
                onChange: e => { setError('name', { message: '' }); setError('path', { message: '' }); setValue('path', (e.target.value).toLowerCase()); }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: '*Path',
                fetching: fetching,
                disabled: true,
                name: 'path',
                uppercase: false,
                errors: errors,
                InputProps: { disableUnderline: true, startAdornment: <InputAdornment position="start">/{ getValues().route }/</InputAdornment> }
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