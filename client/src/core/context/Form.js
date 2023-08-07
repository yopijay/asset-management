// Libraries
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";

export const FormCntxt = createContext();
export const FormPrvdr = props => {
    const { children } = props;
    const [ validation, setValidation ] = useState({});
    const { register, handleSubmit, formState: { errors }, getValues, setValue, setError, control, reset } = useForm({ resolver: Object.keys(validation).length === 0 ? '' : yupResolver(validation) });

    return <FormCntxt.Provider value= {{ setValidation, register, handleSubmit, errors, getValues, setValue, setError, control, reset }}>{ children }</FormCntxt.Provider>
}