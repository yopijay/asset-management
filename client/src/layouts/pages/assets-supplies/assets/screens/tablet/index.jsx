// Libraries
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Core
import { FormPrvdr } from "core/context/Form"; // Provider

// Components
import List from "./List";
import Form from "./Form";

// Constants
import { container } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack sx= { container }>
            <Routes>
                <Route exact path= "/" element= { <List /> } />
                 <Route exact path= "/form/:type" element= { <FormPrvdr><Form /></FormPrvdr> } />
                 <Route exact path= "/form/:type/:id" element= { <FormPrvdr><Form /></FormPrvdr> } />
            </Routes>
        </Stack>
    );
}

export default Index;