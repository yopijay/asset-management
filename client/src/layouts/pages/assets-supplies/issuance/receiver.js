// Libraries
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

// Core
import { dropdown } from "core/api"; // API
import { useGet, usePost } from "core/function/global"; // Function

const Receiver = props => {
    const { type } = useParams();
    const { fetching, errors, control, getValues, setValue, setError } = props;

    const { data: companies, isFetching: cmpfetching } = useGet({ key: ['cmp_dd'], request: dropdown({ table: 'tbl_company', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: departments, mutate: dptmenu, isFetching: dptfetching } = usePost({ request: dropdown });
    const { data: positions, mutate: pstmenu, isFetching: pstfetching } = usePost({ request: dropdown });
    const { data: employees, mutate: empmenu, isFetching: empfetching } = usePost({ request: dropdown });
    
    return ([
        {
            grid: { xs: 12, sm: 4 },
            props: {
                control: control,
                name: 'company_id',
                label: '*Company',
                disabled: type !== 'new',
                fetching: fetching,
                options: !cmpfetching ? companies : [],
                onChange: (e, item) => {
                    setError('company_id', { message: '' });
                    setValue('company_id', item.id);
                    dptmenu({ table: 'tbl_department', data: { type: 'per-company', company_id: item.id } });
                    pstmenu({ table: 'tbl_position', data: { type: 'per-department', company_id: item.id, department_id: getValues()?.department_id ?? null } });
                    empmenu({ table: 'tbl_users', data: { type: 'per-position', company_id: item.id, department_id: getValues()?.department_id ?? null, position_id: getValues()?.position_id ?? null } });
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
                name: 'department_id',
                label: '*Department',
                disabled: type !== 'new',
                fetching: fetching,
                options: !dptfetching && departments ? departments : [],
                onChange: (e, item) => {
                    setError('department_id', { message: '' });
                    setValue('department_id', item.id);
                    pstmenu({ table: 'tbl_position', data: { type: 'per-department', company_id: getValues()?.company_id, department_id: item.id } });
                    empmenu({ table: 'tbl_users', data: { type: 'per-position', company_id: getValues()?.company_id, department_id: item.id, position_id: getValues()?.position_id ?? null } });
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
                name: 'position_id',
                label: '*Position',
                disabled: type !== 'new',
                fetching: fetching,
                options: !pstfetching && positions ? positions : [],
                onChange: (e, item) => {
                    setError('position_id', { message: '' });
                    setValue('position_id', item.id);
                    empmenu({ table: 'tbl_users', data: { type: 'per-position', company_id: getValues()?.company_id, department_id: getValues()?.department_id, position_id: item.id } });
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 7 },
            props: {
                control: control,
                name: 'issued_to',
                label: '*Issued To',
                disabled: type !== 'new',
                fetching: fetching,
                options: !empfetching && employees ? employees : [],
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
            grid: { xs: 12, sm: 5 },
            props: {
                control: control,
                name: 'branch',
                label: '*Branch',
                disabled: type !== 'new',
                fetching: fetching,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'quezon_ave', name: 'QUEZON AVE.' }, 
                                { id: 'sto_domingo', name: 'STO. DOMINGO' }, { id: 'manila', name: 'MANILA' }, { id: 'cavite', name: 'CAVITE' }],
                onChange: (e, item) => {
                    setError('branch', { message: '' });
                    setValue('branch', item.id);
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        }
    ]);
}

Receiver.propTypes = {
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default Receiver;