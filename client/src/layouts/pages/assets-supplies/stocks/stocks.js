// Libraries
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Core
import { FormCntxt } from "core/context/Form"; // Context
import { formatter, useGet, usePost } from "core/function/global"; // Function
import { dropdown, series } from "core/api"; // API

const Assets = ({ fetching }) => {
    const { type } = useParams();
    const { setValue, getValues, setError } = useContext(FormCntxt);
    
    useGet({ key: ['stck_series'], request: series('tbl_stocks'), options: {}, onSuccess: data => { if(type === 'new') setValue('series_no', `STOCK-${formatter(parseInt(data.length) + 1, 7)}`) } });

    useEffect(() => {
        // if(!fetching)
            // if(type !== 'new')
                // brdmenu({ table: 'tbl_brands', data: { type: 'per-type', category: 'assets', id: getValues()?.type } });
    }, []);

    return ([
        {
            grid: { xs: 12, sm: 5, md: 4 },
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

export default Assets;