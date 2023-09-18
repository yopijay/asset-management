// Libraries
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet, usePost } from "core/function/global"; // Function
import { dropdown, series } from "core/api"; // API

const Assets = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);
    
    const { data: categories, isFetching: ctgfetching } = useGet({ key: ['ctg_dd'], request: dropdown({ table: 'tbl_category', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: brands, mutate: brdmenu, isLoading: brdfetching } = usePost({ request: dropdown });
    useGet({ key: ['stck_series'], request: series('tbl_stocks'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `STOCK-${formatter(parseInt(data.length) + 1, 7)}`) } });

    useEffect(() => {
        if(!fetching) { if(type !== 'new') brdmenu({ table: 'tbl_brands', data: { type: 'per-category', id: getValues()?.category_id } }); }
    }, [ fetching, type, brdmenu, getValues ]);

    return ([
        {
            grid: { xs: 12, sm: 4 },
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
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'category_id',
                label: '*Category',
                disabled: type !== 'new',
                fetching: fetching,
                options: !ctgfetching ? categories : [],
                onChange: (e, item) => { 
                    setError('category_id', { message: '' });
                    setValue('category_id', item.id);
                    setValue('category', ((item.name).replace(' ', '_')).toLowerCase());
                    brdmenu({ table: 'tbl_brands', data: { type: 'per-category', id: item.id } });
                }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'brand_id',
                label: '*Brand',
                disabled: type === 'view',
                fetching: fetching,
                options: !brdfetching && brands ? brands : [],
                onChange: (e, item) => { setError('brand_id', { message: '' }); setValue('brand_id', item.id); }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'date_received',
                label: 'Date received',
                disabled: type === 'view',
                fetching: fetching,
                type: 'date',
            },
            type: 'textfield'
        }
    ]);
}

export default Assets;