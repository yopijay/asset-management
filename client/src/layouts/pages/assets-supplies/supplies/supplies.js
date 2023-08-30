// Libraries
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet, usePost } from "core/function/global"; // Function
import { dropdown, series } from "core/api"; // API

const Supplies = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);
    
    // const { data: types, isFetching: typsfetching } = 
    //     useGet({ key: ['typs_dd'], request: dropdown({ table: 'tbl_brands', data: { type: 'per-category', category: 'assets' } }), options: { refetchOnWindowFocus: false } });
    // const { data: brand, mutate: brdmenu, isLoading: brdloading } = usePost({ request: dropdown });
    // useGet({ key: ['assts_series'], request: series('tbl_assets'), options: {}, 
    //     onSuccess: data => { if(type === 'new') setValue('series_no', `ASST-${formatter(parseInt(data.length) + 1, 7)}`) } });

    // useEffect(() => {
    //     if(!fetching)
    //         if(type !== 'new')
    //             brdmenu({ table: 'tbl_brands', data: { type: 'per-type', category: 'assets', id: getValues()?.type } });
    // }, [ fetching, type, brdmenu, getValues ]);

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
        // {
        //     grid: { xs: 12, sm: 7, md: 4 },
        //     props: {
        //         name: 'type',
        //         label: '*Type',
        //         disabled: type !== 'new',
        //         fetching: fetching,
        //         options: !typsfetching ? types : [],
        //         onChange: (e, item) => { 
        //             setError('type', { message: '' }); 
        //             setValue('type', item.id);
        //             brdmenu({ table: 'tbl_brands', data: { type: 'per-type', category: 'assets', id: item.id } });
        //         },
        //         uppercase: true
        //     },
        //     type: 'dropdown'
        // },
        // {
        //     grid: { xs: 12, sm: 7, md: 4 },
        //     props: {
        //         name: 'brand_id',
        //         label: '*Brand',
        //         disabled: type === 'view',
        //         fetching: fetching,
        //         uppercase: true,
        //         options: !brdloading && brand ? brand : [],
        //         onChange: (e, item) => { setError('brand_id', { message: '' }); setValue('brand_id', item.id); },
        //     },
        //     type: 'dropdown'
        // },
        // {
        //     grid: { xs: 12 },
        //     props: {
        //         name: 'serial_no',
        //         label: '*Serial No. | Product ID',
        //         disabled: type === 'view',
        //         fetching: fetching
        //     },
        //     type: 'textfield'
        // },
        // {
        //     grid: { xs: 12 },
        //     props: {
        //         name: 'status',
        //         label: 'Status',
        //         disabled: type === 'view',
        //         fetching: fetching,
        //         onChange:  () => setValue('status', !(getValues().status) ?? true)
        //     },
        //     type: 'switch'
        // }
    ]);
}

export default Supplies;