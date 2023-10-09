// Libraries
import { useParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import PropTypes from "prop-types";

// Core
import { series } from "core/api"; // API
import { formatter, useGet } from "core/function/global"; // Function

const Module = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, getValues } = props;
    useGet({ key: ['mdl_series'], request: series('tbl_module'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `MDL-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, md: 7 },
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
            grid: { xs: 12, sm: 7, md: 6 },
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
            grid: { xs: 12, sm: 5, md: 6 },
            props: {
                register: register,
                label: '*Base URL',
                fetching: fetching,
                disabled: type === 'view',
                name: 'base_url',
                uppercase: false,
                errors: errors,
                InputProps: { disableUnderline: true, startAdornment: <InputAdornment position="start">/</InputAdornment> }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                label: 'Description',
                fetching: fetching,
                disabled: type === 'view',
                name: 'description',
                register: register,
                errors: errors
            },
            type: 'textarea'
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

Module.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired
}

export default Module;