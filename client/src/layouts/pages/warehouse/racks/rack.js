const Rack = () => {

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
                fetching: false
            },
            type: 'textfield'
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

export default Rack;