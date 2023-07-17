// Libraries
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { createContext, useState } from "react";

export const DialogCntxt = createContext();
export const DialogPrvdr = props => {
    const { children } = props;
    const theme = useTheme();
    const fullscreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [ dialog, setDialog ] = useState(false);

    return <DialogCntxt.Provider value= {{ dialog, setDialog, fullscreen }}>{ children }</DialogCntxt.Provider>
}