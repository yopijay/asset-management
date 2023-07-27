import * as Yup from 'yup';
export const validation = () => ( 
    Yup.object({ 
        email: Yup.string().email('Invalid email format!').required('This field is required!'),
        password: Yup.string().required('This field is required!'),
        fname: Yup.string().required('This field is required!'),
        lname: Yup.string().required('This field is required!'),
        employee_no: Yup.string().required('This field is required!'),
        rfid: Yup.string().required('This field is required!')
    }) 
);