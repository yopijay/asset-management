const Laptop = props => {
    const { fetching, type, getValues, setValue } = props;

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
                name: 'cpu',
                label: 'CPU',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
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
            grid: { xs: 12, sm: 8 },
            props: {
                name: 'os',
                label: 'Operating System',
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
                name: 'fingerprint',
                label: 'Fingerprint reader',
                disabled: type === 'view',
                fetching: fetching,
                onChange:  () => setValue('fingerprint', !(getValues().fingerprint) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                name: 'webcam',
                label: 'Web camera',
                disabled: type === 'view',
                fetching: fetching,
                onChange:  () => setValue('webcam', !(getValues().webcam) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                name: 'backlit_keyboard',
                label: 'Backlit Keyboard',
                disabled: type === 'view',
                fetching: fetching,
                onChange:  () => setValue('backlit_keyboard', !(getValues().backlit_keyboard) ?? true)
            },
            type: 'switch'
        }
    ])
}

export default Laptop;