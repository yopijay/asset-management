// Libraries
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment } from "@mui/material";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom"

// Core
import { dropdown, series } from "core/api"; // API
import { FormCntxt } from "core/context/Form"; // Context
import { pad, useGet, usePost } from "core/function/global"; // Functions

export const Account = ({ fetching }) => {
    const { type } = useParams();
    const [ spass, setpass ] = useState(false);
    const [ scpass, setscpass ] = useState(false);

    return ([
        {
            grid: { xs: 12 },
            props: {
                name: 'email',
                label: '*Email',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: false
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'password',
                label: '*Password',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: false,
                type: !spass ? 'password' : 'text',
                InputProps: {
                    endAdornment: type !== 'view' ?
                        <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setpass(!spass) }>
                            { !spass ? <FontAwesomeIcon icon= { solid('eye') } /> : <FontAwesomeIcon icon= { solid('eye-slash') } /> }
                        </InputAdornment> : ''
                }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'confirm_password',
                label: '*Confirm Password',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: false,
                type: !scpass ? 'password' : 'text',
                InputProps: {
                    endAdornment: type !== 'view' ?
                        <InputAdornment position= "end" sx= {{ cursor: 'pointer' }} onClick= { () => setscpass(!scpass) }>
                            { !scpass ? <FontAwesomeIcon icon= { solid('eye') } /> : <FontAwesomeIcon icon= { solid('eye-slash') } /> }
                        </InputAdornment> : ''
                }
            },
            type: 'textfield'
        },
    ])
}

export const Personal = ({ fetching }) => {
    const { type } = useParams();

    return ([
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'fname',
                label: '*First name',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'mname',
                label: 'Middle name',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'lname',
                label: '*Last name',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'address',
                label: 'Address',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textarea'
        }
    ]);
}

export const Employee = ({ fetching }) => {
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
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'quezon_ave', name: 'QUEZON AVE.' }, 
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
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'user', name: 'USER' }, { id: 'admin', name: 'ADMIN' }],
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