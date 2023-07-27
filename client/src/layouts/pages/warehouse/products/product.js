const Rack = () => {

    return ([
        {
            grid: { xs: 12, md: 8 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: false,
                onchange: () => {}
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
                name: 'branch',
                label: '*Branch',
                disabled: false,
                fetching: false,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'quezon_ave', name: 'QUEZON AVE.' }, 
                                { id: 'sto_domingo', name: 'STO. DOMINGO' }, { id: 'manila', name: 'MANILA' }, { id: 'cavite', name: 'CAVITE' }],
                onchange: () => {}
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'floor',
                label: '*Floor',
                disabled: false,
                fetching: false,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: '1f', name: '1ST FLOOR' },
                                { id: '2f', name: '2ND FLOOR' }, { id: '3f', name: '3RD FLOOR' }, { id: '4f', name: '4TH FLOOR' }],
                onchange: () => {}
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'code',
                label: '*Rack code',
                disabled: false,
                fetching: false,
                options: [],
                onchange: () => {}
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'item_code',
                label: '*Item code',
                disabled: false,
                fetching: false,
                onchange: () => {}
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 3 },
            props: {
                name: 'uom',
                label: '*Unit of Measure',
                disabled: false,
                fetching: false,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'pc', name: 'PC/S' }],
                onchange: () => {}
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 3 },
            props: {
                name: 'total',
                label: '*Total',
                disabled: true,
                fetching: false,
                type: 'number',
                onchange: () => {},
                value: 0
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 2 },
            props: {
                name: 'mb',
                label: '*Mother box',
                disabled: false,
                fetching: false,
                type: 'number',
                onchange: () => {},
                value: 0
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 2 },
            props: {
                name: 'qmb',
                label: '*Qty per Mother box',
                disabled: false,
                fetching: false,
                type: 'number',
                onchange: () => {},
                value: 0
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 2 },
            props: {
                name: 'sb',
                label: '*Small box',
                disabled: false,
                fetching: false,
                type: 'number',
                onchange: () => {},
                value: 0
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 2 },
            props: {
                name: 'qsb',
                label: '*Qty per Small box',
                disabled: false,
                fetching: false,
                type: 'number',
                onchange: () => {},
                value: 0
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'tingi',
                label: '*Tingi',
                disabled: false,
                fetching: false,
                type: 'number',
                onchange: () => {},
                value: 0
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'description',
                label: 'Item description',
                disabled: false,
                fetching: false,
                onchange: () => {},
            },
            type: 'textarea'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'remarks',
                label: 'Remarks',
                disabled: false,
                fetching: false,
                onchange: () => {},
            },
            type: 'textarea'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'status',
                label: 'Status',
                disabled: false,
                fetching: false,
                onchange: () => {}
            },
            type: 'switch'
        }
    ]);
}

export default Rack;