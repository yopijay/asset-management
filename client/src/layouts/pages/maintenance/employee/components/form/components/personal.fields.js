// Libraries
import { useParams } from "react-router-dom";

const Personal = ({ fetching }) => {
    const { type } = useParams();

    return ([
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'fname',
                label: '*First name',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'mname',
                label: 'Middle name',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                name: 'lname',
                label: '*Last name',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12 },
            props: {
                name: 'address',
                label: 'Address',
                disabled: type === 'view',
                fetching: fetching
            },
            type: 'textarea'
        }
    ]);
}

export default Personal;