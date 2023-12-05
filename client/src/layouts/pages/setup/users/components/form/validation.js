import * as Yup from 'yup';

export const validation = () => ( 
    Yup.object({ 
        email: Yup.string().email('Invalid email format!').required('This field is required!'),
        password: Yup.string().required(`This field is required!`).min('6', 'Password must have at least 6 characters!'),
        cpassword: Yup.string().required(`This field is required!`).min('6', 'Password must have at least 6 characters!'),
        fname: Yup.string().required('This field is required!'),
        lname: Yup.string().required('This field is required!'),
        employee_no: Yup.string().required('This field is required!')
    }) 
);

export const cvalidation = (data, errors, type) => {
    if(!(data.profile)) { errors.push({ name: 'profile', message: 'This field is required!' }); }
    if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/).test(data.email)) { errors.push({ name: 'email', message: 'Invalid email format!' }); }
    if(type === 'new') { if(!(data.password === data.cpassword)) { errors.push({ name: 'cpassword', message: 'Password doesn`t match!' }); } }
    if(!(data.branch)) { errors.push({ name: 'branch', message: 'This field is required!' }); }
    if(!(data.user_level)) { errors.push({ name: 'user_level', message: 'This field is required!' }); }
    if(!(data.employment_status)) { errors.push({ name: 'employment_status', message: 'This field is required!' }); }
    if(!(data.company_id)) { errors.push({ name: 'company_id', message: 'This field is required!' }); }
    if(!(data.department_id)) { errors.push({ name: 'department_id', message: 'This field is required!' }); }
    if(!(data.position_id)) { errors.push({ name: 'position_id', message: 'This field is required!' }); }
    if(!(data.gender)) { errors.push({ name: 'gender', message: 'This field is required!' }); }
}