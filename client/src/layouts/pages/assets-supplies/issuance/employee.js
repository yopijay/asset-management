// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Core
import { dropdown } from "core/api"; // API
import { FormCntxt } from "core/context/Form"; // Context
import { useGet, usePost } from "core/function/global"; // Function

const Employee = ({ fetching }) => {
    const { type } = useParams();
    const { setError, setValue, getValues } = useContext(FormCntxt);

    const { data: company, isFetching: cmpfetching } = useGet({ key: ['cmp_dd'], request: dropdown({ table: 'tbl_company', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: department, mutate: dptmenu, isLoading: dptloading } = usePost({ request: dropdown });
    const { data: position, mutate: pstmenu, isLoading: pstloading } = usePost({ request: dropdown });
    const { data: users, mutate: usrmenu, isLoading: usrloading } = usePost({ request: dropdown });

    return ([
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
                onChange: (e, item) => { 
                    setError('position_id', { message: '' });
                    setValue('position_id', item.id);
                    usrmenu({ table: 'tbl_users', data: { type: 'per-position', company_id: getValues().company_id, department_id: getValues().department_id, position_id: item.id } });
                }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 7 },
            props: {
                name: 'issued_to',
                label: '*Issued to',
                disabled: type === 'view',
                fetching: fetching,
                options: !usrloading && users ? users : [],
                onChange: (e, item) => { setError('issued_to', { message: '' }); setValue('issued_to', item.id); }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 5 },
            props: {
                name: 'date_issued',
                label: 'Date issued',
                disabled: type === 'view',
                type: 'date',
                fetching: fetching
            },
            type: 'textfield'
        },
    ]);
}

export default Employee;