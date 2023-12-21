// Libraries
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// Core 
import { dropdown, specific } from "core/api"; // API
import { useGet, usePost } from "core/function/global"; // Function

const Fields = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, getValues, setError } = props;

    const { data: category, isFetching: ctgfetching } = useGet({ key: ['ctg_dd'], request: dropdown({ table: 'tbl_category', data: { type: 'assets' } }), options: { refetchOnWindowFocus: false } });
    const { data: issuedto, isFetching: itfetching } = useGet({ key: ['it_dd'], request: dropdown({ table: 'tbl_users', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: issuedby, isFetching: ibfetching } = useGet({ key: ['ib_dd'], request: dropdown({ table: 'tbl_users', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: brand, mutate: brdmenu, isLoading: brdloading } = usePost({ request: dropdown });
    const { data: items, mutate: itmmenu, isLoading: itmloading } = usePost({ request: dropdown });
    const { mutate: stocks } =
        usePost({ request: specific,
            onSuccess: data => {
                if(Array.isArray(data)) {
                    for(let count = 0; count < Object.keys(data[0]).length; count++) {
                        let _name = Object.keys(data[0])[count];

                        if(!(['series_no', 'category_id', 'brand_id'].includes(_name))) {
                            setValue(_name, _name === 'hdmi' || _name === 'vga' || _name === 'dvi' || _name === 'bluetooth' || _name === 'wifi' ||
                                                _name === 'fingerprint' || _name === 'camera' ? 
                                                data[0][_name] === 1 : _name === 'category' ? ((data[0][_name]).replace(' ', '_')).toLowerCase() : data[0][_name])
                        }
                    }
                }
            } 
        });

    useEffect(() => {
        if(!fetching) {
            if(type !== 'new') {
                brdmenu({ table: 'tbl_brands', data: { type: 'per-category-id', category_id: getValues()?.category_id } });
                itmmenu({ table: 'tbl_stocks', data: { type: 'per-brand', category_id: getValues()?.category_id, brand_id: getValues()?.brand_id, form: type } });
                stocks({ table: 'tbl_stocks', id: getValues()?.item_id });
            }
        }
    }, [ fetching, type, brdmenu, itmmenu, stocks, getValues ]);

    return ([
        {
            grid: { xs: 12, md: 4 },
            props: {
                control: control,
                name: 'issued_to',
                label: '*Issued to',
                disabled: type === 'view',
                fetching: fetching,
                options: !itfetching ? issuedto : [],
                onChange: (e, item) => { 
                    setError('issued_to', { message: '' });
                    setValue('issued_to', item.id);
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                control: control,
                name: 'issued_by',
                label: '*Issued by',
                disabled: type === 'view',
                fetching: fetching,
                options: !ibfetching ? issuedby : [],
                onChange: (e, item) => { 
                    setError('issued_by', { message: '' });
                    setValue('issued_by', item.id);
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                register: register,
                label: '*Issued date',
                fetching: fetching,
                disabled: type === 'view',
                name: 'date_issued',
                errors: errors,
                type: 'date',
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
                    setValue('branch', '');
                    setValue('item_id', '');
                    setValue('category', ((item.name).replace(' ', '_')).toLowerCase());
                    brdmenu({ table: 'tbl_brands', data: { type: 'per-category-id', category_id: item.id } });
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
                    setValue('branch', '');
                    setValue('item_id', '');
                    setValue('brand_id', item.id);
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
                name: 'branch',
                label: '*Branch',
                disabled: type !== 'new',
                fetching: fetching,
                options: !brdloading && brand ? [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'quezon_ave', name: 'QUEZON AVE.' }, 
                                { id: 'sto_domingo', name: 'STO. DOMINGO' }, { id: 'manila', name: 'MANILA' }, { id: 'cavite', name: 'CAVITE' }] : [],
                onChange: (e, item) => { 
                    setError('branch', { message: '' }); 
                    setValue('branch', item.id); 
                    itmmenu({ table: 'tbl_stocks', data: { type: 'per-branch', category_id: getValues().category_id, brand_id: getValues().brand_id, branch: item.id, form: type } });
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
                name: 'item_id',
                label: '*Item',
                disabled: type !== 'new',
                fetching: fetching,
                options: !itmloading && items ? items : [],
                onChange: (e, item) => { 
                    setError('item_id', { message: '' }); 
                    setValue('item_id', item.id);
                    stocks({ table: 'tbl_stocks', id: item.id });
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12 },
            props: {
                label: 'Note',
                fetching: fetching,
                disabled: type === 'view',
                name: 'note',
                register: register,
                errors: errors
            },
            type: 'textarea'
        }
    ]);
}

export default Fields;