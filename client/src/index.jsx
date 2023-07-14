// Libraries
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

// Assets
import "assets/font/font.css";

// Constants
import { Theme } from "core/theme";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ThemeProvider theme= { Theme }>
        <CssBaseline />
    </ThemeProvider>
)