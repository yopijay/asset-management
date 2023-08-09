// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";

// Core
import { series } from "core/api"; // API
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet } from "core/function/global"; // Function

const Brand = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);
    // useGet({ key: ['brd_series'], request: series('tbl_brand'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `BRD-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, md: 4 },
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
            grid: { xs: 12, sm: 7, md: 4 },
            props: {
                name: 'category_id',
                label: '*Category',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'assets', name: 'ASSETS' }, { id: 'supplies', name: 'SUPPLIES' }],
                onChange: (e, item) => { setError('category_id', { message: '' }); setValue('category_id', item.id); },
                uppercase: true
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 5, md: 4 },
            props: {
                name: 'name',
                label: '*Brand',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: true,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'description',
                label: 'Description',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: true,
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

export default Brand;