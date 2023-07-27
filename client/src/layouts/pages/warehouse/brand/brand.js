const Company = () => {

    return ([
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: false
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'name',
                label: '*Brand',
                disabled: false,
                fetching: false
            },
            type: 'textfield'
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

export default Company;