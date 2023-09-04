const Toner = props => {
    const { fetching, type } = props;

    return([
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
                name: 'date_received',
                label: 'Date received',
                disabled: type === 'view',
                type: 'date',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 6, sm: 2 },
            props: {
                name: 'quantity',
                label: 'Quantity',
                type: 'number',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 6, sm: 2 },
            props: {
                name: 'warranty',
                label: 'Warranty',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        }
    ])
}

export default Toner;