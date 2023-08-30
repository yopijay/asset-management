// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet } from "core/function/global"; // Function
import { series } from "core/api"; // API

// Constants
const types = {
    assets: [
        { id: 0, name: '-- SELECT AN ITEM BELOW --' },
        { id: 'monitor', name: 'MONITOR' },
        { id: 'system_unit', name: 'SYSTEM UNIT' },
        { id: 'laptop', name: 'LAPTOP' }
    ],
    supplies: [
        { id: 0, name: '-- SELECT AN ITEM BELOW --' },
        { id: 'toner', name: 'TONER' }
    ]
}

const Brand = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);

    useGet({ key: ['asb_series'], request: series('tbl_brands'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `BRD-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, sm: 12, md: 4 },
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
            grid: { xs: 12, sm: 6, md: 4 },
            props: {
                name: 'category',
                label: '*Category',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'assets', name: 'ASSETS' }, { id: 'supplies', name: 'SUPPLIES' }],
                onChange: (e, item) => { setError('category', { message: '' }); setValue('category', item.id); },
                uppercase: true
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 6, md: 4 },
            props: {
                name: 'type',
                label: '*Type',
                disabled: type === 'view',
                fetching: fetching,
                options: !getValues().category ? [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }] : types[`${getValues().category}`],
                onChange: (e, item) => { setError('type', { message: '' }); setValue('type', item.id); },
                uppercase: true
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12 },
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