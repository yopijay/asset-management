const SystemUnit = props => {
    const { fetching, getValues, setValue } = props;

    return([
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
                name: 'cpu',
                label: 'CPU',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'gpu',
                label: 'GPU',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'hdd',
                label: 'HDD',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'ssd',
                label: 'SSD',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'ram',
                label: 'RAM',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                name: 'os',
                label: 'Operating System',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                name: 'power_supply',
                label: 'Power Supply',
                disabled: true,
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
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
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                name: 'bluetooth',
                label: 'Bluetooth',
                disabled: true,
                fetching: fetching,
                onChange:  () => setValue('bluetooth', !(getValues().bluetooth) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                name: 'wfii',
                label: 'WiFi',
                disabled: true,
                fetching: fetching,
                onChange:  () => setValue('wfii', !(getValues().wfii) ?? true)
            },
            type: 'switch'
        }
    ])
}

export default SystemUnit;