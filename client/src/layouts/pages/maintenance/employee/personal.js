const Personal = () => {
    return ([
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'fname',
                label: '*First name',
                disabled: false,
                fetching: false,
                onchange: () => {}
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'mname',
                label: 'Middle name',
                disabled: false,
                fetching: false,
                onchange: () => {}
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'lname',
                label: '*Last name',
                disabled: false,
                fetching: false,
                onchange: () => {}
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'address',
                label: 'Address',
                disabled: false,
                fetching: false,
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
                fetching: false,
                onchange: () => {}
            },
            type: 'switch'
        }
    ]);
}

export default Personal;