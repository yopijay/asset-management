import * as Yup from 'yup';
export const validation = () => ( Yup.object({ serial_no: Yup.string().required('This field is required!') }) );