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
                name: 'category_id',
                label: '*Category',
                disabled: false,
                fetching: false,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'assets', name: 'ASSETS' }, { id: 'supplies', name: 'SUPPLIES' }],
                onchange: () => {}
            },
            type: 'dropdown'
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
            grid: { xs: 12, md: 5 },
            props: {
                name: 'name',
                label: '*Classification',
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