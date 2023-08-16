import * as Yup from 'yup';
export const validation = () => ( 
    Yup.object({ 
        email: Yup.string().email('Invalid email format!').required('This field is required!'),
        // password: Yup.string().required(`This field is required!`).min('6', 'Password must have at least 6 characters!'),
        // confirm_password: Yup.string().required(`This field is required!`).min('6', 'Password must have at least 6 characters!'),
        fname: Yup.string().required('This field is required!'),
        lname: Yup.string().required('This field is required!'),
        employee_no: Yup.string().required('This field is required!')
    }) 
);