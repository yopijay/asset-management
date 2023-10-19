// Libraries
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Core
import { dropdown, series } from "core/api"; // API
import { formatter, useGet, usePost } from "core/function/global"; // Function

const Position = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, setError, getValues } = props;

    const { data: companies, isFetching: cmpfetching } = useGet({ key: ['cmp_dd'], request: dropdown({ table: 'tbl_company', data: {} }), options: { refetchOnWindowFocus: false } });
    const { data: department, mutate: dptmenu, isLoading } = usePost({ request: dropdown });
    useGet({ key: ['pst_series'], request: series('tbl_position'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `PST-${formatter(parseInt(data.length) + 1, 7)}`) } });

    useEffect(() => { 
        if(!fetching)
            if(type !== 'new')
                dptmenu({ table: 'tbl_department', data: { type: 'per-company', company_id: getValues()?.company_id } });
    }, [ fetching, type, dptmenu, getValues ]);

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
                onChange: (e, item) => { 
                    setError('company_id', { message: '' });
                    setValue('company_id', item.id);
                    dptmenu({ table: 'tbl_department', data: { type: 'per-company', company_id: item.id } });
                },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                control: control,
                name: 'department_id',
                label: '*Department',
                disabled: type === 'view',
                fetching: fetching,
                options: !isLoading && department ? department : [],
                onChange: (e, item) => { setError('department_id', { message: '' }); setValue('department_id', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                register: register,
                label: '*Position',
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

Position.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default Position;