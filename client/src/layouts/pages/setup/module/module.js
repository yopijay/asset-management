// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";

// Core
import { series } from "core/api"; // API
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet } from "core/function/global"; // Function

const Module = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues } = useContext(FormCntxt);
    useGet({ key: ['mdl_series'], request: series('tbl_module'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `MDL-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, md: 7 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: fetching,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 7, md: 6 },
            props: {
                name: 'name',
                label: '*Category',
                disabled: type === 'view',
                fetching: fetching,
                onChange: e => setValue('base_url', `${(e.target.value).toLowerCase()}`),
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 5, md: 6 },
            props: {
                name: 'base_url',
                label: '*Base URL',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: false,
                InputProps: { disableUnderline: true, startAdornment: <InputAdornment position="start">/</InputAdornment> }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'description',
                label: 'Description',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textarea'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'status',
                label: 'Status',
                disabled: type === 'view',
                fetching: fetching,
                onChange:  () => setValue('status', !(getValues().status) ?? true)
            },
            type: 'switch'
        }
    ]);
}

export default Module;