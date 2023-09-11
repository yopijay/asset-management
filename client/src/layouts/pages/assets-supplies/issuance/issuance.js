// Libraries
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet, usePost } from "core/function/global"; // Function
import { dropdown, series, specific } from "core/api"; // API

const Assets = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);
    
    const { data: types, mutate: typemenu, isLoading: typeloading } = usePost({ request: dropdown });
    const { data: brand, mutate: brdmenu, isLoading: brdloading } = usePost({ request: dropdown });
    const { data: items, mutate: itmmenu, isLoading: itmloading } = usePost({ request: dropdown });
    const { mutate: itmspecific } = usePost({ request: specific, onSuccess: data => {
        if(Array.isArray(data)) {
            for(let count = 0; count < Object.keys(data[0]).length; count++) { 
                let _name = Object.keys(data[0])[count];
                setValue(_name, 
                    _name === 'status' || _name === 'hdmi' || _name === 'vga' || _name === 'dvi' || _name === 'bluetooth' || _name === 'fingerprint' ||
                    _name === 'webcam' || _name === 'backlit_keyboard' ? 
                        data[0][_name] === 1 : data[0][_name]);
            }
        }
    } });

    useGet({ key: ['issuance_series'], request: series('tbl_issuance'), options: {}, 
        onSuccess: data => { if(type === 'new') setValue('series_no', `ISSUANCE-${formatter(parseInt(data.length) + 1, 7)}`) } });

    useEffect(() => {
        if(!fetching)
            if(type !== 'new') {
                typemenu({ table: 'tbl_brands', data: { type: 'per-category', category: getValues()?.category } });
                brdmenu({ table: 'tbl_brands', data: { type: 'per-type', category: getValues()?.category, id: getValues()?.type } });
                itmmenu({ table: `tbl_${getValues()?.category}`, category: getValues()?.category, type: getValues()?.type, id: getValues()?.brand_id });
            }
    }, [ fetching, type, typemenu, brdmenu, itmmenu, getValues ]);

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
            grid: { xs: 12, sm: 6, md: 4 },
            props: {
                name: 'category',
                label: '*Category',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'assets', name: 'ASSETS' }, { id: 'supplies', name: 'SUPPLIES' }],
                onChange: (e, item) => { 
                    setError('category', { message: '' });
                    setValue('category', item.id);
                    typemenu({ table: 'tbl_brands', data: { type: 'per-category', category: getValues().category } });
                },
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
                options: !typeloading && types ? types : [],
                onChange: (e, item) => { 
                    setError('type', { message: '' });
                    setValue('type', item.id);
                    brdmenu({ table: 'tbl_brands', data: { type: 'per-type', category: getValues().category, id: item.id } }); 
                },
                uppercase: true
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 5 },
            props: {
                name: 'brand_id',
                label: '*Brand',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: true,
                options: !brdloading && brand ? brand : [],
                onChange: (e, item) => { 
                    setError('brand_id', { message: '' });
                    setValue('brand_id', item.id); 
                    itmmenu({ table: `tbl_${getValues().category}`, data: { category: getValues().category, type: getValues().type, id: item.id } });
                },
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 7 },
            props: {
                name: 'item_id',
                label: '*Item',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: true,
                options: !itmloading && items ? items : [],
                onChange: (e, item) => { 
                    setError('item_id', { message: '' });
                    setValue('item_id', item.id);
                    itmspecific({ table: `tbl_${getValues().category}`, id: item.id });
                },
            },
            type: 'dropdown'
        }
    ]);
}

export default Assets;