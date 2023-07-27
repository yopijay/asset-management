const Items = () => {

    return ([
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'category_id',
                label: '*Category',
                disabled: false,
                fetching: false,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'assets', name: 'ASSETS' }, { id: 'assets', name: 'SUPPLIES' }],
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
            grid: { xs: 12, md: 4 },
            props: {
                name: 'serial_no',
                label: '*Serial no. | Product ID',
                disabled: false,
                fetching: false,
                options: [],
                onchange: () => {}
            },
            type: 'dropdown'
        }
    ]);
}

export default Items;