const Monitor = props => {
    const { fetching, type, getValues, setValue } = props;

    return ([
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'model',
                label: 'Model',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'panel',
                label: 'Panel',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'resolution',
                label: 'Resolution',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'color',
                label: 'Color',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'power_supply',
                label: 'Power Supply',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
    ]);
}

export default Monitor;