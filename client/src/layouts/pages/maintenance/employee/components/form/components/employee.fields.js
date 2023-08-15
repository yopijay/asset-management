// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Core
import { dropdown, series } from "core/api"; // API
import { FormCntxt } from "core/context/Form"; // Context
import { pad, useGet, usePost } from "core/function/global"; // Function

const Employee = ({ fetching }) => {
    const { type } = useParams();
    const { setError, setValue, getValues } = useContext(FormCntxt);

    const { data: company, isFetching: cmpfetching } = useGet({ key: ['cmp_dd'], request: dropdown({ table: 'tbl_company', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: department, mutate: dptmenu, isLoading: dptloading } = usePost({ request: dropdown });
    const { data: position, mutate: pstmenu, isLoading: pstloading } = usePost({ request: dropdown });

    useGet({ key: ['emp_series'], request: series('tbl_users'), options: {}, 
        onSuccess: data => { if(type === 'new') { setValue('employee_no', `${(new Date()).getFullYear().toString().slice(-2)}1${pad(parseInt(data.length) + 1, 5)}`); } } });

    return ([
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'employee_no',
                label: '*Employee no.',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'rfid',
                label: '*RFID',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'branch',
                label: '*Branch',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'quezon_ave', name: 'QUEZON AVE.' }, 
                                { id: 'sto_domingo', name: 'STO. DOMINGO' }, { id: 'manila', name: 'MANILA' }, { id: 'cavite', name: 'CAVITE' }],
                onChange: (e, item) => { setError('branch', { message: '' }); setValue('branch', item.id); }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'user_level',
                label: '*User level',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'user', name: 'USER' }, { id: 'admin', name: 'ADMIN' }],
                onChange: (e, item) => { setError('user_level', { message: '' }); setValue('user_level', item.id); }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'company_id',
                label: '*Company',
                disabled: type === 'view',
                fetching: fetching,
                options: !cmpfetching ? company : [],
                onChange: (e, item) => { 
                    setError('company_id', { message: '' }); 
                    setValue('company_id', item.id); 
                    dptmenu({ table: 'tbl_department', data: { type: 'per-company', id: item.id } }); 
                    pstmenu({ table: 'tbl_position', data: { type: 'per-department', company_id: item.id } });
                }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'department_id',
                label: '*Department',
                disabled: type === 'view',
                fetching: fetching,
                options: !dptloading && department ? department : [],
                onChange: (e, item) => { 
                    setError('department_id', { message: '' }); 
                    setValue('department_id', item.id);
                    pstmenu({ table: 'tbl_position', data: { type: 'per-department', company_id: getValues().company_id, department_id: item.id } });
                }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'position_id',
                label: '*Position',
                disabled: type === 'view',
                fetching: fetching,
                options: !pstloading && position ? position : [],
                onChange: (e, item) => { setError('position_id', { message: '' }); setValue('position_id', item.id); }
            },
            type: 'dropdown'
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

export default Employee; 