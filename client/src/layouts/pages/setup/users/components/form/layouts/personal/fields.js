import { useParams } from "react-router-dom";

const Fields = props => {
    const { type } = useParams();
    const { register, control, fetching, errors, setValue, setError, getValues } = props;

    return ([
        {
            grid: { xs: 12, md: 4 },
            props: {
                register: register,
                label: '*First name',
                fetching: fetching,
                disabled: type === 'view',
                name: 'fname',
                errors: errors,
                onChange: e => { 
                    setError('fname', { message: '' });
                    setError('email', { message: '' });
                    setValue('email', 
                        `${(e.target.value).charAt(0).toLowerCase()}${(getValues().mname).charAt(0).toLowerCase()}${((getValues().lname).replace(/[^A-Z0-9]+/ig, "")).toLowerCase()}@${getValues().extension}`) },
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                register: register,
                label: 'Middlename',
                fetching: fetching,
                disabled: type === 'view',
                name: 'mname',
                errors: errors,
                onChange: e => { 
                    setError('email', { message: '' });
                    setValue('email', 
                        `${(getValues().fname).charAt(0).toLowerCase()}${(e.target.value).charAt(0).toLowerCase()}${((getValues().lname).replace(/[^A-Z0-9]+/ig, "")).toLowerCase()}@${getValues().extension}`) },
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, md: 4 },
            props: {
                register: register,
                label: '*Last name',
                fetching: fetching,
                disabled: type === 'view',
                name: 'lname',
                errors: errors,
                onChange: e => { 
                    setError('lname', { message: '' });
                    setError('email', { message: '' });
                    setValue('email', 
                        `${(getValues().fname).charAt(0).toLowerCase()}${(getValues().mname).charAt(0).toLowerCase()}${((e.target.value).replace(/[^A-Z0-9]+/ig, "")).toLowerCase()}@${getValues().extension}`) },
                InputProps: { disableUnderline: true }
            },
            type: 'textfield'
        },
        {
            grid: { xs: 12, sm: 4 },
            props: {
                control: control,
                name: 'gender',
                label: '*Gender',
                disabled: type === 'view',
                fetching: fetching,
                options: [{ id: '', name: '-- SELECT AN ITEM BELOW --' }, { id: 'male', name: 'MALE' }, { id: 'female', name: 'FEMALE' }],
                onChange: (e, item) => { setError('gender', { message: '' }); setValue('gender', item.id); },
                errors: errors,
                getValues: getValues
            },
            type: 'dropdown'
        },
        {
            grid: { xs: 12 },
            props: {
                label: 'Address',
                fetching: fetching,
                disabled: type === 'view',
                name: 'address',
                register: register,
                errors: errors
            },
            type: 'textarea'
        },
        {
            grid: { xs: 12 },
            props: {
                label: 'Status',
                fetching: fetching,
                disabled: type === 'view',
                name: 'status',
                control: control,
                getValues: getValues,
                onChange:  () => setValue('status', !(getValues().status) ?? true)
            },
            type: 'switch'
        }
    ]);
}

export default Fields;