import * as Yup from 'yup';

export const validation = () => ( 
    Yup.object({ 
        email: Yup.string().email('Invalid email format!').required('This field is required!'),
        password: Yup.string().required('This field is required!').min('6', 'Password must have at least 6 characters!')
    }) 
);