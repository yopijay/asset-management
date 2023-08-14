import * as Yup from 'yup';
export const validation = () => ( Yup.object({ name: Yup.string().required('This field is required!') }) );