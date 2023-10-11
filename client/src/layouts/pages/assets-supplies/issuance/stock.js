// Libraries
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

// Core
import { useGet, usePost } from "core/function/global"; // Function
import { dropdown, specific } from "core/api"; // API

const Stock = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, getValues, setValue, setError } = props;

    const { data: categories, isFetching: ctgfetching } = useGet({ key: ['ctg_dd'], request: dropdown({ table: 'tbl_category', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: brands, mutate: brdmenu, isLoading: brdfetching } = usePost({ request: dropdown });
    const { data: stocks, mutate: stckmenu, isLoading: stckfetching } = usePost({ request: dropdown });
    const { mutate: stckfetch } = 
        usePost({ request: specific, 
            onSuccess: data => {
                if(Array.isArray(data)) {
                    for(let count = 0; count < Object.keys(data[0]).length; count++) {
                        let _name = Object.keys(data[0])[count];

                        if(!(['series_no', 'category_id', 'brand_id', 'stock_id', 'issued_to', 'created_by', 'updated_by', 'deleted_by', 'imported_by', 'date_created', 
                                'date_updated', 'date_deleted', 'date_imported'].includes(_name))) {
                            setValue(_name, _name === 'hdmi' || _name === 'vga' || _name === 'dvi' || _name === 'bluetooth' || _name === 'wifi' ||
                                                _name === 'fingerprint' || _name === 'webcam' || _name === 'backlit' ? 
                                                data[0][_name] === 1 : _name === 'category' ? ((data[0][_name]).replace(' ', '_')).toLowerCase() : data[0][_name])
                        }
                    }
                }
            }
        });

    useEffect(() => {
        if(!fetching) {
            if(type !== 'new') {
                brdmenu({ table: 'tbl_brands', data: { type: 'per-category', category_id: getValues()?.category_id } });
                stckmenu({ table: 'tbl_stocks', data: { type: 'per-brand', category_id: getValues()?.category_id, brand_id: getValues()?.brand_id } });
            }
        }
    }, [ fetching, type, getValues, brdmenu, stckmenu ]);

    return ([
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
                    stckmenu({ table: 'tbl_stocks', data: { type: 'per-brand', category_id: item.id, brand_id: getValues()?.brand_id ?? null } });
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
                    stckmenu({ table: 'tbl_stocks', data: { type: 'per-brand', category_id: getValues().category_id, brand_id: item.id } });
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
                name: 'stock_id',
                label: '*Serial no. | Model',
                disabled: type !== 'new',
                fetching: fetching,
                options: !stckfetching && stocks ? stocks : [],
                onChange: (e, item) => {
                    setError('stock_id', { message: '' });
                    setValue('stock_id', item.id);
                    stckfetch({ table: 'tbl_stocks', id: item.id });
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12 },
            props: {
                label: 'Remarks',
                fetching: fetching,
                disabled: type === 'view',
                name: 'remarks',
                register: register,
                errors: errors
            },
            type: 'textarea'
        }
    ]);
}

Stock.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default Stock;