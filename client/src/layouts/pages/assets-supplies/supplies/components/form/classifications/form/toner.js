const Toner = props => {
    const { fetching, type } = props;

    return([
        {
            grid: { xs: 12, sm: 6 },
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
            grid: { xs: 6, sm: 3 },
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
            grid: { xs: 6, sm: 3 },
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