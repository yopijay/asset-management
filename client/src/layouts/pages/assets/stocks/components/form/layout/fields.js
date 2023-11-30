const laptop = props => {
    const { register, fetching, errors, control, setValue, getValues, type } = props;

    return [
        {
            grid: { xs: 12, sm: 8 },
            props: {
                register: register,
                label: 'Serial no',
                fetching: fetching,
                disabled: type === 'view',
                name: 'serial_no',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Model',
                fetching: fetching,
                disabled: type === 'view',
                name: 'model',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'CPU',
                fetching: fetching,
                disabled: type === 'view',
                name: 'cpu',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'GPU',
                fetching: fetching,
                disabled: type === 'view',
                name: 'gpu',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'HDD',
                fetching: fetching,
                disabled: type === 'view',
                name: 'hdd',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'SSD',
                fetching: fetching,
                disabled: type === 'view',
                name: 'ssd',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'RAM',
                fetching: fetching,
                disabled: type === 'view',
                name: 'ram',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Operating system',
                fetching: fetching,
                disabled: type === 'view',
                name: 'os',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Power supply',
                fetching: fetching,
                disabled: type === 'view',
                name: 'power_supply',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Warranty',
                fetching: fetching,
                disabled: type === 'view',
                name: 'warranty',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'HDMI',
                fetching: fetching,
                disabled: type === 'view',
                name: 'hdmi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('hdmi', !(getValues().hdmi) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'VGA',
                fetching: fetching,
                disabled: type === 'view',
                name: 'vga',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('vga', !(getValues().vga) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'DVI',
                fetching: fetching,
                disabled: type === 'view',
                name: 'dvi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('dvi', !(getValues().dvi) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'Bluetooth',
                fetching: fetching,
                disabled: type === 'view',
                name: 'bluetooth',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('bluetooth', !(getValues().bluetooth) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'Fingerprint',
                fetching: fetching,
                disabled: type === 'view',
                name: 'fingerprint',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('fingerprint', !(getValues().fingerprint) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'Camera',
                fetching: fetching,
                disabled: type === 'view',
                name: 'camera',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('camera', !(getValues().camera) ?? true)
            },
            type: 'switch'
        }
    ];
}

const system_unit = props => {
    const { register, fetching, errors, control, setValue, getValues, type } = props;

    return [
        {
            grid: { xs: 12, sm: 8 },
            props: {
                register: register,
                label: 'Serial no',
                fetching: fetching,
                disabled: type === 'view',
                name: 'serial_no',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Model',
                fetching: fetching,
                disabled: type === 'view',
                name: 'model',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'CPU',
                fetching: fetching,
                disabled: type === 'view',
                name: 'cpu',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'GPU',
                fetching: fetching,
                disabled: type === 'view',
                name: 'gpu',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'HDD',
                fetching: fetching,
                disabled: type === 'view',
                name: 'hdd',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'SSD',
                fetching: fetching,
                disabled: type === 'view',
                name: 'ssd',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'RAM',
                fetching: fetching,
                disabled: type === 'view',
                name: 'ram',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Operating system',
                fetching: fetching,
                disabled: type === 'view',
                name: 'os',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Power supply',
                fetching: fetching,
                disabled: type === 'view',
                name: 'power_supply',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Warranty',
                fetching: fetching,
                disabled: type === 'view',
                name: 'warranty',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'HDMI',
                fetching: fetching,
                disabled: type === 'view',
                name: 'hdmi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('hdmi', !(getValues().hdmi) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'VGA',
                fetching: fetching,
                disabled: type === 'view',
                name: 'vga',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('vga', !(getValues().vga) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'DVI',
                fetching: fetching,
                disabled: type === 'view',
                name: 'dvi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('dvi', !(getValues().dvi) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'Bluetooth',
                fetching: fetching,
                disabled: type === 'view',
                name: 'bluetooth',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('bluetooth', !(getValues().bluetooth) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4, md: 3 },
            props: {
                label: 'Wifi',
                fetching: fetching,
                disabled: type === 'view',
                name: 'wifi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('wifi', !(getValues().wifi) ?? true)
            },
            type: 'switch'
        }
    ]
}

const monitor = props => {
    const { register, fetching, errors, control, getValues, setValue, type } = props;

    return ([
        {
            grid: { xs: 12, sm: 8 },
            props: {
                register: register,
                label: 'Serial no',
                fetching: fetching,
                disabled: type === 'view',
                name: 'serial_no',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                register: register,
                label: 'Model',
                fetching: fetching,
                disabled: type === 'view',
                name: 'model',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'Panel',
                fetching: fetching,
                disabled: type === 'view',
                name: 'panel',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                register: register,
                label: 'Resolution',
                fetching: fetching,
                disabled: type === 'view',
                name: 'resolution',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                register: register,
                label: 'Refresh rate',
                fetching: fetching,
                disabled: type === 'view',
                name: 'refresh_rate',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'Power supply',
                fetching: fetching,
                disabled: type === 'view',
                name: 'power_supply',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'Warranty',
                fetching: fetching,
                disabled: type === 'view',
                name: 'warranty',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 6, sm: 4 },
            props: {
                label: 'HDMI',
                fetching: fetching,
                disabled: type === 'view',
                name: 'hdmi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('hdmi', !(getValues().hdmi) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4 },
            props: {
                label: 'VGA',
                fetching: fetching,
                disabled: type === 'view',
                name: 'vga',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('vga', !(getValues().vga) ?? true)
            },
            type: 'switch'
        },
        {
            grid: { xs: 6, sm: 4 },
            props: {
                label: 'DVI',
                fetching: fetching,
                disabled: type === 'view',
                name: 'dvi',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('dvi', !(getValues().dvi) ?? true)
            },
            type: 'switch'
        }
    ]);
}

const toner = props => {
    const { register, fetching, errors, control, getValues, setValue, setError, type } = props;

    return([
        {
            grid: { xs: 12, sm: 6 },
            props: {
                register: register,
                label: 'Model',
                fetching: fetching,
                disabled: type === 'view',
                name: 'model',
                errors: errors,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                control: control,
                name: 'type',
                label: 'Type',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'laser', name: 'LASER JET' }, { id: 'ink', name: 'INK JET' }, { id: 'ribbon', name: 'RIBBON' }],
                onChange: (e, item) => { setError('type', { message: '' }); setValue('type', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                control: control,
                name: 'condition',
                label: 'Condition',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'original', name: 'ORIGINAL' }, { id: 'rema', name: 'REMANUFACTURED' }],
                onChange: (e, item) => { setError('condition', { message: '' }); setValue('condition', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12, sm: 3 },
            props: {
                register: register,
                label: 'Quantity',
                fetching: fetching,
                disabled: type === 'view',
                name: 'quantity',
                errors: errors,
                type: 'number',
                InputProps: { disableUnderline: true },
                inputProps: { min: 1 }
            },
            type: 'textfield'
        }
    ]);
}

module.exports = {
    laptop,
    system_unit,
    monitor,
    toner
}