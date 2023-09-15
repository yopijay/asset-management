const Toner = props => {
    const { fetching, type, getValues, setValue } = props;

    return([
        {
            grid: { xs: 12, sm: 6 },
            props: {
                name: 'model',
                label: 'Model',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                name: 'type',
                label: '*Type',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'laser', name: 'LASER JET' }, { id: 'ink', name: 'INK JET' }, { id: 'ribbon', name: 'RIBBON' }],
                onChange: (e, item) => { setValue('type', item.id); }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                name: 'condition',
                label: '*Condition',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'original', name: 'ORIGINAL' }, { id: 'rema', name: 'REMANUFACTURED' }],
                onChange: (e, item) => { setValue('condition', item.id); }
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                name: 'color',
                label: 'Color',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                name: 'quantity',
                label: 'Quantity',
                disabled: type === 'view',
                fetching: fetching,
                type: 'number',
                
                inputProps: { min: 1 }
            },
            type: 'textfield'
        }
    ])
}

export default Toner;