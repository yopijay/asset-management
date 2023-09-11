const Monitor = props => {
    const { fetching, getValues, setValue } = props;

    return ([
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'model',
                label: 'Model',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'panel',
                label: 'Panel',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'resolution',
                label: 'Resolution',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'color',
                label: 'Color',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'power_supply',
                label: 'Power Supply',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'warranty',
                label: 'Warranty',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                name: 'hdmi',
                label: 'HDMI',
                disabled: true,
                fetching: fetching,
                onChange:  () => setValue('hdmi', !(getValues().hdmi) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                name: 'vga',
                label: 'VGA',
                disabled: true,
                fetching: fetching,
                onChange:  () => setValue('vga', !(getValues().vga) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                name: 'dvi',
                label: 'DVI',
                disabled: true,
                fetching: fetching,
                onChange:  () => setValue('dvi', !(getValues().dvi) ?? true)
            },
            type: 'switch'
        }
    ]);
}

export default Monitor;