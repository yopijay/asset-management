// Libraries
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assets
import "assets/font/font.css";

// Constants
import { Theme } from "core/theme";
import App from "App";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ThemeProvider theme= { Theme }>
        <CssBaseline /> {/* Para mawala yung default padding and margins sa page, kasi kapag tinanggal to magkakaroon ng default na spaces around the page. */}
        <App />
        <ToastContainer /> {/* Ito naman yung para sa mga toasters natin and mas maganda sya na ilagay sa pinaka parent component para magamit natin kahit saan. */}
    </ThemeProvider>
)