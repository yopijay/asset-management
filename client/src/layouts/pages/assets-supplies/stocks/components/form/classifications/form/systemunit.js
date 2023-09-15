const SystemUnit = props => {
    const { fetching, type, getValues, setValue } = props;

    return([
        {
            grid: { xs: 12, sm: 8 },
            props: {
                name: 'serial_no',
                label: '*Serial no',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
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
            grid: { xs: 12, sm: 6 },
            props: {
                name: 'cpu',
                label: 'CPU',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                name: 'gpu',
                label: 'GPU',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'hdd',
                label: 'HDD',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'ssd',
                label: 'SSD',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'ram',
                label: 'RAM',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                name: 'os',
                label: 'Operating System',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                name: 'power_supply',
                label: 'Power Supply',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                name: 'warranty',
                label: 'Warranty',
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
                disabled: true,
                fetching: fetching,
                value: 1,
                type: 'number'
            },
            type: 'textfield'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                name: 'hdmi',
                label: 'HDMI',
                disabled: type === 'view',
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
                disabled: type === 'view',
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
                disabled: type === 'view',
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
                disabled: type === 'view',
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
                disabled: type === 'view',
                fetching: fetching,
                onChange:  () => setValue('wfii', !(getValues().wfii) ?? true)
            },
            type: 'switch'
        }
    ])
}

export default SystemUnit;