// Libraries
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// Core
import { dropdown, series } from "core/api"; // API
import { pad, useGet, usePost } from "core/function/global"; // Function

const Fields = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, setError, getValues } = props;

    const { data: company, isFetching: cmpfetching } = useGet({ key: ['cmp_dd'], request: dropdown({ table: 'tbl_company', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: users, isFetching: usrfetching } = useGet({ key: ['usr_dd'], request: dropdown({ table: 'tbl_users', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: department, mutate: dptmenu, isLoading: dptloading } = usePost({ request: dropdown });
    const { data: position, mutate: pstmenu, isLoading: pstloading } = usePost({ request: dropdown });

    useGet({ key: ['emp_series'], request: series('tbl_users'), options: {}, 
        onSuccess: data => { if(type === 'new') { setValue('employee_no', `${(new Date()).getFullYear().toString().slice(-2)}1${pad(parseInt(data.length) + 1, 5)}`); } } });

    useEffect(() => {
        if(!fetching)
            if(type !== 'new') {
                dptmenu({ table: 'tbl_department', data: { type: 'per-company', company_id: getValues()?.company_id } });
                pstmenu({ table: 'tbl_position', data: { type: 'per-department', company_id: getValues()?.company_id, department_id: getValues()?.department_id } });
            }
    }, [ fetching, type, dptmenu, pstmenu, getValues, setValue ]);
    
    return ([
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: '*Employee no.',
                fetching: fetching,
                disabled: type === 'view',
                name: 'employee_no',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'RFID',
                fetching: fetching,
                disabled: type === 'view',
                name: 'rfid',
                errors: errors,
                defaultValue: '000',
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                control: control,
                name: 'branch',
                label: '*Branch',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'quezon_ave', name: 'QUEZON AVE.' }, 
                                { id: 'sto_domingo', name: 'STO. DOMINGO' }, { id: 'manila', name: 'MANILA' }, { id: 'cavite', name: 'CAVITE' }],
                onChange: (e, item) => { setError('branch', { message: '' }); setValue('branch', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                control: control,
                name: 'user_level',
                label: '*User level',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'user', name: 'USER' }, { id: 'admin', name: 'ADMIN' }],
                onChange: (e, item) => { setError('user_level', { message: '' }); setValue('user_level', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                control: control,
                name: 'employment_status',
                label: '*Employment status',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'intern', name: 'INTERN' }, { id: 'probation', name: 'PROBATIONARY' }, 
                                { id: 'regular', name: 'REGULAR' }, { id: 'retired', name: 'RETIRED' }, { id: 'resigned', name: 'RESIGNED' }],
                onChange: (e, item) => { setError('employment_status', { message: '' }); setValue('employment_status', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                control: control,
                name: 'company_id',
                label: '*Company',
                disabled: type === 'view',
                fetching: fetching,
                options: !cmpfetching ? company : [],
                onChange: (e, item) => { 
                    setError('company_id', { message: '' }); 
                    setError('email', { message: '' });
                    setValue('company_id', item.id); 
                    setValue('extension', (item.extension).toLowerCase());
                    setValue('email', 
                        `${(getValues().fname).charAt(0).toLowerCase()}
                            ${(getValues().mname).charAt(0).toLowerCase()}
                            ${((getValues().lname).replace(/[^A-Z0-9]+/ig, "")).toLowerCase()}@${(item.extension).toLowerCase()}`)
                    dptmenu({ table: 'tbl_department', data: { type: 'per-company', company_id: item.id } }); 
                    pstmenu({ table: 'tbl_position', data: { type: 'per-department', company_id: item.id, department_id: getValues()?.department_id } });
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
                name: 'department_id',
                label: '*Department',
                disabled: type === 'view',
                fetching: fetching,
                options: !dptloading && department ? department : [],
                onChange: (e, item) => { 
                    setError('department_id', { message: '' }); 
                    setValue('department_id', item.id);
                    pstmenu({ table: 'tbl_position', data: { type: 'per-department', company_id: getValues()?.company_id, department_id: item.id } });
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
                name: 'position_id',
                label: '*Position',
                disabled: type === 'view',
                fetching: fetching,
                options: !pstloading && position ? position : [],
                onChange: (e, item) => { setError('position_id', { message: '' }); setValue('position_id', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                control: control,
                name: 'head_id',
                label: '*Head',
                disabled: type === 'view',
                fetching: fetching,
                options: !usrfetching ? users : [],
                onChange: (e, item) => { setError('head_id', { message: '' }); setValue('head_id', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        }
    ]);
}

export default Fields;