// Libraries
import { createContext, useState } from "react";

export const GlobalCntxt = createContext();
export const GlobalPrvdr = props => {
    const { children, window } = props;
    const [ isActive, setActive ] = useState(localStorage.getItem('nav'));

    const container = window !== undefined ? () => window().document.body : undefined;
    return <GlobalCntxt.Provider value= {{ isActive, setActive, container }}>{ children }</GlobalCntxt.Provider>
}