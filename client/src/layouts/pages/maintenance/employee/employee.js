const Employee = () => {

    return ([
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'employee_no',
                label: '*Employee no.',
                disabled: false,
                fetching: false
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 6 },
            props: {
                name: 'rfid',
                label: '*RFID',
                disabled: false,
                fetching: false
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 6 },
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
            grid: { xs: 12, md: 6 },
            props: {
                name: 'user_level',
                label: '*User level',
                disabled: false,
                fetching: false,
                options: [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }, { id: 'user', name: 'USER' }, { id: 'admin', name: 'ADMIN' }],
                onchange: () => {}
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'company_id',
                label: '*Company',
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
                name: 'department_id',
                label: '*Department',
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
                name: 'position_id',
                label: '*Position',
                disabled: false,
                fetching: false,
                options: [],
                onchange: () => {}
            },
            type: 'dropdown'
        }
    ]);
}

export default Employee;