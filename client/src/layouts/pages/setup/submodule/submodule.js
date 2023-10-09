// Libraries
import { useParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import PropTypes from "prop-types";

// Core
import { dropdown, series } from "core/api"; // API
import { formatter, useGet } from "core/function/global"; // Function

const Submodule = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, setError, getValues } = props;

    const { data: module, isFetching: ddfetching } = useGet({ key: ['mdl_dd'], request: dropdown({ table: 'tbl_module', data: {} }), options: { refetchOnWindowFocus: false } });
    useGet({ key: ['sub_series'], request: series('tbl_sub_module'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `SMDL-${formatter(parseInt(data.length) + 1, 7)}`) } });
    
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
                name: 'module_id',
                label: '*Module',
                disabled: type === 'view',
                fetching: fetching,
                options: !ddfetching ? module : [],
                onChange: (e, item) => { setError('module_id', { message: '' }); setValue('module_id', item.id); setValue('module', item.base_url); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: '*Sub module',
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
                InputProps: { disableUnderline: true, startAdornment: <InputAdornment position="start">/{ getValues().module }/</InputAdornment> }
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

Submodule.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default Submodule;