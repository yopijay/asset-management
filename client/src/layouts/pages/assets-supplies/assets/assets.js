const Company = () => {

    return ([
        {
            grid: { xs: 12, md: 9 },
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
                name: 'category_id',
                label: '*Category',
                disabled: true,
                fetching: false,
                value: 'assets'
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'brand_id',
                label: '*Brand',
                disabled: false,
                fetching: false,
                options: [],
                onchange: () => {}
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'classification_id',
                label: '*Classification',
                disabled: false,
                fetching: false,
                options: [],
                onchange: () => {}
            },
            type: 'dropdown'
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