// Libraries
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Core
import { formatter, useGet } from "core/function/global"; // Function
import { series } from "core/api"; // API

const Category = props => {
    const { type } = useParams();
    const { register, fetching, errors, control, setValue, getValues } = props;

    useGet({ key: ['ctg_series'], request: series('tbl_category'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `CTG-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, md: 4 },
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
            grid: { xs: 12, md: 8 },
            props: {
                register: register,
                label: '*Name',
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

Category.propTypes = {
    register: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired
}

export default Category;