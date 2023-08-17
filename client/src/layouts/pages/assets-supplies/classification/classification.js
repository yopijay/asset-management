// Libraries
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet, usePost } from "core/function/global"; // Function
import { dropdown, series } from "core/api"; // API

const Classification = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);

    const { data: brands, mutate: brdmenu, isLoading: brdloading } = usePost({ request: dropdown });
    useGet({ key: ['asc_series'], request: series('tbl_assets_supplies_classification'), options: {}, 
        onSuccess: data => { if(type === 'new') setValue('series_no', `CLFN-${formatter(parseInt(data.length) + 1, 7)}`) } });

    useEffect(() => { 
        if(!fetching) 
            if(type !== 'new') 
                brdmenu({ table: 'tbl_assets_supplies_brand', data: { type: 'per-category', category: getValues()?.category } }); 
    }, [ fetching, type, brdmenu, getValues ]);

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
                name: 'category',
                label: '*Category',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'assets', name: 'ASSETS' }, { id: 'supplies', name: 'SUPPLIES' }],
                onChange: (e, item) => { 
                    setError('category', { message: '' }); 
                    setValue('category', item.id); 
                    brdmenu({ table: 'tbl_assets_supplies_brand', data: { type: 'per-category', category: item.id }}) 
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
                options: !brdloading && brands ? brands : [],
                onChange: (e, item) => { setError('brand_id', { message: '' }); setValue('brand_id', item.id); },
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 5, md: 4 },
            props: {
                name: 'name',
                label: '*Classification',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: true
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

export default Classification;