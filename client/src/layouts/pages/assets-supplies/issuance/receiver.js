const Receiver = ({ fetching }) => {
    return ([
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: fetching,
                uppercase: true,
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        }
    ]);
}

export default Receiver;