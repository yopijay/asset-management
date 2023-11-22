// Libraries
import { useParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";

// Core
import { series } from "core/api"; // API
import { formatter, useGet } from "core/function/global"; // Function

const Fields = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, getValues } = props;
    useGet({ key: ['rts_series'], request: series('tbl_routes'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `RTS-${formatter(parseInt(data.length) + 1, 7)}`) } });

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
                label: '*Route name',
                fetching: fetching,
                disabled: type === 'view',
                name: 'route',
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

export default Fields;