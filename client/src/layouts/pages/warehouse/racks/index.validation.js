import * as Yup from 'yup';
export const validation = () => ( Yup.object({ code: Yup.string().required('This field is required!') }) );