const Rack = () => {

    return ([
        {
            grid: { xs: 12, md: 8 },
            props: {
                name: 'series_no',
                label: '*Series no.',
                disabled: true,
                fetching: false,
                onchange: () => {}
            },
            type: 'textfield'
        }
    ]);
}

export default Rack;