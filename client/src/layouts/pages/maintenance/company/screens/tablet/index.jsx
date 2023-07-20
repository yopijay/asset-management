// Libraires
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Constants
import { container } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack sx= { container }>
            <Routes>
                <Route exact path= "/" element= { 'LIST' } />
                <Route exact path= "/form/:type" element= { 'CREATE' } />
                <Route exact path= "/form/:type/:id" element= { 'UPDATE' } />
            </Routes>
        </Stack>
    );
}

export default Index;