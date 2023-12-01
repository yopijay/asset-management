// Libraries
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// Core
import { dropdown, series } from "core/api"; // API
import { formatter, useGet, usePost } from "core/function/global"; // Functions

const Field = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, getValues, setError } = props;

    const { data: category, isFetching: ctgfetching } = useGet({ key: ['ctg_dd'], request: dropdown({ table: 'tbl_category', data: { type: 'assets' } }), options: { refetchOnWindowFocus: false } });
    const { data: brand, mutate: brdmenu, isLoading: brdloading } = usePost({ request: dropdown });

    useGet({ key: ['stck_series'], request: series('tbl_stocks'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `STCK-${formatter(parseInt(data.length) + 1, 7)}`) } });

    useEffect(() => {
        if(!fetching) { if(type !== 'new') brdmenu({ table: 'tbl_brands', data: { type: 'per-category', category_id: getValues()?.category_id } }); }
    }, [ fetching, type, brdmenu, getValues ]);

    return [
        {
            grid: { xs: 12, md: 6 },
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
            grid: { xs: 12, md: 3 },
            props: {
                control: control,
                name: 'category_id',
                label: '*Category',
                disabled: type !== 'new',
                fetching: fetching,
                options: !ctgfetching ? category : [],
                onChange: (e, item) => { 
                    setError('category_id', { message: '' });
                    setValue('category_id', item.id);
                    setValue('category', ((item.name).replace(' ', '_')).toLowerCase());
                    brdmenu({ table: 'tbl_brands', data: { type: 'per-category', category_id: item.id } });
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 3 },
            props: {
                control: control,
                name: 'brand_id',
                label: '*Brand',
                disabled: type !== 'new',
                fetching: fetching,
                options: !brdloading && brand ? brand : [],
                onChange: (e, item) => { 
                    setError('brand_id', { message: '' }); 
                    setValue('brand_id', item.id); 
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        }
    ];
}

export default Field;