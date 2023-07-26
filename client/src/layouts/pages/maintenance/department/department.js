const Department = () => {

    return ([
        {
            grid: { xs: 12, md: 5 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: false
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 7 },
            props: {
                name: 'company_id',
                label: '*Company',
                disabled: false,
                fetching: false,
                options: []
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'department',
                label: '*Department',
                disabled: false,
                fetching: false
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'department_head_id',
                label: '*Department head',
                disabled: false,
                fetching: false,
                options: []
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'description',
                label: 'Description',
                disabled: false,
                fetching: false
            },
            type: 'textarea'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'status',
                label: 'Status',
                disabled: false,
                fetching: false
            },
            type: 'switch'
        }
    ]);
}

export default Department;