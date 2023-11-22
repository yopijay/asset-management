import * as Yup from 'yup';
export const validation = () => ( 
    Yup.object({ 
        route: Yup.string().required('This field is required!'),
        base_url: Yup.string().required('This field is required!')
    }) 
);