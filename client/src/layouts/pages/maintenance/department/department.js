// Libraries
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Core
import { series } from "core/api"; // API
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet } from "core/function/global"; // Function

const Department = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues } = useContext(FormCntxt);

    useGet({ key: ['dpt_series'], request: series('tbl_department'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `DPT-${formatter(parseInt(data.length) + 1, 7)}`) } });

    return ([
        {
            grid: { xs: 12, md: 5 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 7 },
            props: {
                name: 'company_id',
                label: '*Company',
                disabled: type === 'view',
                fetching: fetching,
                options: []
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'name',
                label: '*Department',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'department_head_id',
                label: '*Department head',
                disabled: type === 'view',
                fetching: fetching,
                options: []
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'description',
                label: 'Description',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textarea'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'status',
                label: 'Status',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'switch'
        }
    ]);
}

export default Department;