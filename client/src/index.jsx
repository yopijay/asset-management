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
        <CssBaseline />
        <App />
        <ToastContainer />
    </ThemeProvider>
)