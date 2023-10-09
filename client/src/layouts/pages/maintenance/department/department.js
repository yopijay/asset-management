// Libraries
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Core
import { dropdown, series } from "core/api"; // API
import { formatter, useGet } from "core/function/global"; // Function

const Department = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, setError, getValues } = props;

    const { data: companies, isFetching: cmpfetching } = useGet({ key: ['cmp_dd'], request: dropdown({ table: 'tbl_company', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: users, isFetching: usrfetching } = useGet({ key: ['usr_dd'], request: dropdown({ table: `tbl_users`, data: {} }), options: { refetchOnWindowFocus: false } });
    useGet({ key: ['dpt_series'], request: series('tbl_department'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `DPT-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, md: 5 },
            props: {
                register: register,
                label: '*Series no.',
                fetching: fetching,
                disabled: true,
                name: 'series_no',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 7 },
            props: {
                control: control,
                name: 'company_id',
                label: '*Company',
                disabled: type !== 'new',
                fetching: fetching,
                options: !cmpfetching ? companies : [],
                onChange: (e, item) => { setError('company_id', { message: '' }); setValue('company_id', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                control: control,
                name: 'department_head_id',
                label: '*Department head',
                disabled: type !== 'new',
                fetching: fetching,
                options: !usrfetching ? users : [],
                onChange: (e, item) => { setError('department_head_id', { message: '' }); setValue('department_head_id', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                register: register,
                label: '*Department',
                fetching: fetching,
                disabled: type === 'view',
                name: 'name',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                label: 'Descriptiom',
                fetching: fetching,
                disabled: type === 'view',
                name: 'description',
                register: register,
                errors: errors
            },
            type: 'textarea'
        },
        {
            grid: { xs: 12 },
            props: {
                label: 'Status',
                fetching: fetching,
                disabled: type === 'view',
                name: 'status',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('status', !(getValues().status) ?? true)
            },
            type: 'switch'
        }
    ]);
}

Department.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default Department;