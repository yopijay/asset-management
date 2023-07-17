// Libraries
import { createContext, useState } from "react";

export const AccountCntxt = createContext();
export const AccountPrvdr = props => {
    const { children } = props;
    const [ data, setData ] = useState([]);

    return <AccountCntxt.Provider value= {{ data, setData }}>{ children }</AccountCntxt.Provider>
}