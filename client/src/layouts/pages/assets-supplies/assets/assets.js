// Libraries
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet } from "core/function/global"; // Function
import { dropdown, series } from "core/api"; // API

const Assets = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);

    const { data: brand, isFetching: brdfetching } = 
        useGet({ key: ['brd_dd'], request: dropdown({ table: 'tbl_brands', data: { type: 'per-category', category: 'assets' } }), options: { refetchOnWindowFocus: false } });
    useGet({ key: ['assts_series'], request: series('tbl_assets'), options: {}, 
        onSuccess: data => { if(type === 'new') setValue('series_no', `ASST-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, sm: 5, md: 4 },
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
                name: 'classification_id',
                label: '*Classification',
                disabled: type === 'view',
                fetching: fetching,
                options: [],
                onChange: (e, item) => { 
                    setError('classification_id', { message: '' }); 
                    setValue('classification_id', item.id); 
                    setValue('classification', (item.name).toLowerCase());
                },
                uppercase: true
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 5, md: 4 },
            props: {
                name: 'brand_id',
                label: '*Brand',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: true,
                options: !brdfetching ? brand : [],
                onChange: (e, item) => { setError('brand_id', { message: '' }); setValue('brand_id', item.id); },
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'serial_no',
                label: '*Serial No.',
                disabled: false,
                fetching: fetching
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

export default Assets;