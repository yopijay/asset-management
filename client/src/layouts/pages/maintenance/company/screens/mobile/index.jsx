// Libraries
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Components
import List from "./List";
import Form from "./Form";

// Constants
import { container } from "./index.style"; // Style

const Index = () => {
    return (
        <Stack sx= { container }>
            <Routes>
                <Route exact path= "/" element= { <List /> } />
                <Route exact path= "/form/:type" element= { <Form /> } />
                <Route exact path= "/form/:type/:id" element= { <Form /> } />
            </Routes>
        </Stack>
    );
}

export default Index;