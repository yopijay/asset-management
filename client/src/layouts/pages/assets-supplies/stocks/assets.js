// Libraries
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Core
import { formatter, useGet, usePost } from "core/function/global"; // Function
import { dropdown, series } from "core/api"; // API

const Assets = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, getValues, setValue, setError } = props;
    
    const { data: categories, isFetching: ctgfetching } = useGet({ key: ['ctg_dd'], request: dropdown({ table: 'tbl_category', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: brands, mutate: brdmenu, isLoading: brdfetching } = usePost({ request: dropdown });
    useGet({ key: ['stck_series'], request: series('tbl_stocks'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `STOCK-${formatter(parseInt(data.length) + 1, 7)}`) } });

    useEffect(() => {
        if(!fetching) { if(type !== 'new') brdmenu({ table: 'tbl_brands', data: { type: 'per-category', category_id: getValues()?.category_id } }); }
    }, [ fetching, type, brdmenu, getValues ]);

    return ([
        {
            grid: { xs: 12, sm: 4 },
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
            grid: { xs: 12, sm: 4 },
            props: {
                control: control,
                name: 'category_id',
                label: '*Category',
                disabled: type !== 'new',
                fetching: fetching,
                options: !ctgfetching ? categories : [],
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
            grid: { xs: 12, sm: 4 },
            props: {
                control: control,
                name: 'brand_id',
                label: '*Brand',
                disabled: type !== 'new',
                fetching: fetching,
                options: !brdfetching && brands ? brands : [],
                onChange: (e, item) => {
                    setError('brand_id', { message: '' });
                    setValue('brand_id', item.id);
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Date received',
                fetching: fetching,
                disabled: type === 'view',
                name: 'date_received',
                errors: errors,
                InputProps: { disableUnderline: true },
                type: 'date'
            },
            type: 'textfield'
        }
    ]);
}

Assets.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default Assets;