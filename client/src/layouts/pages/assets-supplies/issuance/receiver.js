// Libraries
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

// Core
import { dropdown } from "core/api"; // API
import { useGet } from "core/function/global"; // Function

const Receiver = props => {
    const { type } = useParams();
    const { fetching, errors, control, getValues, setValue } = props;

    const { data: companies, isFetching: cmpfetching } = useGet({ key: ['cmp_dd'], request: dropdown({ table: 'tbl_company', data: {} }), options: { refetchOnWindowFocus: false } });
    
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
                onChange: (e, item) => {},
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
                options: [],
                onChange: (e, item) => {},
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
                options: [],
                onChange: (e, item) => {},
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
                options: [],
                onChange: (e, item) => {},
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
                options: [],
                onChange: (e, item) => {},
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
    setValue: PropTypes.func.isRequired
}

export default Receiver;