// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet } from "core/function/global"; // Function
import { dropdown, series } from "core/api"; // API

const Brand = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);

    const { data: categories, isFetching: ctgfetching } = useGet({ key: ['ctg_dd'], request: dropdown({ table: 'tbl_category', data: {} }), options: { refetchOnWindowFocus: false } });
    useGet({ key: ['brd_series'], request: series('tbl_brands'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `BRD-${formatter(parseInt(data.length) + 1, 7)}`) } });

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
            grid: { xs: 12, sm: 6, md: 3 },
            props: {
                name: 'category_id',
                label: '*Category',
                disabled: type !== 'new',
                fetching: fetching,
                options: !ctgfetching ? categories : [],
                onChange: (e, item) => { setError('category_id', { message: '' }); setValue('category_id', item.id); },
                uppercase: true
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 6, md: 5 },
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