const Monitor = ({ fetching }) => {
    return ([
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'model',
                label: 'Model',
                disabled: false,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'panel',
                label: 'Panel',
                disabled: false,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'resolution',
                label: 'Resolution',
                disabled: false,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'color',
                label: 'Color',
                disabled: false,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'power_supply',
                label: 'Power Supply',
                disabled: false,
                fetching: fetching
            },
            type: 'textfield'
        },
    ]);
}

export default Monitor;