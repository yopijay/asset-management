// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet } from "core/function/global"; // Function
import { series } from "core/api"; // API

const Brand = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues } = useContext(FormCntxt);

    useGet({ key: ['ctg_series'], request: series('tbl_category'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `CTG-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: fetching,
                uppercase: true,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 8 },
            props: {
                name: 'name',
                label: '*Name',
                disabled: type === 'view',
                fetching: fetching,
                uppercase: true,
                InputProps: { disableUnderline: true }
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

export default Brand;