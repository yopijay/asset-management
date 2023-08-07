// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";

// Core
import { dropdown, series } from "core/api"; // API
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet } from "core/function/global"; // Function

const Company = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);

    const { data: module, isFetching: ddfetching } = useGet({ key: ['mdl_dd'], request: dropdown({ table: 'tbl_module', data: {} }), options: { refetchOnWindowFocus: false } });
    useGet({ key: ['sub_series'], request: series('tbl_sub_module'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `SMDL-${formatter(parseInt(data.length) + 1, 7)}`) } });
    
    return ([
        {
            grid: { xs: 12, sm: 6, md: 7 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: fetching,
                uppercase: true,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6, md: 5 },
            props: {
                name: 'module_id',
                label: '*Module',
                disabled: type === 'view',
                fetching: fetching,
                onChange: (e, item) => { setError('module_id', { message: '' }); setValue('module_id', item.id); setValue('module', item.base_url); },
                options: !ddfetching ? module : [],
                uppercase: true
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                name: 'name',
                label: '*Sub module',
                disabled: type === 'view',
                fetching: fetching,
                onChange: e => { setError('name', { message: '' }); setError('path', { message: '' }); setValue('path', (e.target.value).toLowerCase()); },
                uppercase: true
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                name: 'path',
                label: '*Path',
                disabled: true,
                fetching: fetching,
                uppercase: false,
                InputProps: { disableUnderline: true, startAdornment: <InputAdornment position="start">/{ getValues().module }/</InputAdornment> }
            },
            type: 'textfield'
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

export default Company;