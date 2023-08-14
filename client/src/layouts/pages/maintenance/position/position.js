// Libraries
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Core
import { dropdown, series } from "core/api"; // API
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet, usePost } from "core/function/global"; // Function

const Position = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);

    const { data: company, isFetching: cmpfetching } = useGet({ key: ['cmp_dd'], request: dropdown({ table: 'tbl_company', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: department, mutate: dptmenu, isLoading } = usePost({ request: dropdown });
    useGet({ key: ['pst_series'], request: series('tbl_position'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `PST-${formatter(parseInt(data.length) + 1, 7)}`) } });

    useEffect(() => { 
        if(!fetching)
            if(type !== 'new')
                dptmenu({ table: 'tbl_department', data: { type: 'per-company', id: getValues()?.company_id } });
    }, [ fetching, type, dptmenu, getValues ]);

    return ([
        {
            grid: { xs: 12, md: 5 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 7 },
            props: {
                name: 'company_id',
                label: '*Company',
                disabled: type === 'view',
                fetching: fetching,
                options: !cmpfetching ? company : [],
                onChange: (e, item) => { setError('company_id', { message: '' }); setValue('company_id', item.id); dptmenu({ table: 'tbl_department', data: { type: 'per-company', id: item.id } }); }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'department_id',
                label: '*Department',
                disabled: type === 'view',
                fetching: fetching,
                options: !isLoading && department ? department : [],
                onChange: (e, item) => { setError('department_id', { message: '' }); setValue('department_id', item.id); }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'name',
                label: '*Position',
                disabled: type === 'view',
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

export default Position;