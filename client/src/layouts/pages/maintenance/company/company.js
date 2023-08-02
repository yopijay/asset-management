// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Core
import { series } from "core/api"; // API
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet } from "core/function/global"; // Function

const Company = ({ fetching }) => {
    const { type } = useParams();
    const { setValue } = useContext(FormCntxt);

    useGet({ key: ['cmp_series'], request: series('tbl_company'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `CMP-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, md: 5 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: fetching,
                onchange: () => {}
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 7, md: 5 },
            props: {
                name: 'name',
                label: '*Name',
                disabled: false,
                fetching: fetching,
                onchange: () => {}
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 5, md: 2 },
            props: {
                name: 'telephone',
                label: 'Telephone',
                disabled: false,
                fetching: fetching,
                onchange: () => {}
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'description',
                label: 'Description',
                disabled: false,
                fetching: fetching,
                onchange: () => {}
            },
            type: 'textarea'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'address',
                label: 'Address',
                disabled: false,
                fetching: fetching,
                onchange: () => {}
            },
            type: 'textarea'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'status',
                label: 'Status',
                disabled: false,
                fetching: fetching,
                onchange: () => {}
            },
            type: 'switch'
        }
    ]);
}

export default Company;