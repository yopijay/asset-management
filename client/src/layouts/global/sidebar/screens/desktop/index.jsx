// Libraries
import { Stack, Typography } from "@mui/material";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import Account from "../../components/Account";
import Navs from "../../components/Navs";

// Constants
import { account, btn, fix, nav, sidebar } from "../../index.style"; // Styles

const Index = () => {
    return (
        <Stack sx= { sidebar }>
            <Stack sx= { fix } spacing= { 2 }>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 } flexGrow= { 1 }>
                    <Stack sx= { account }><Account /></Stack>
                    <Stack sx= { nav }><Navs /></Stack>
                </Stack>
                <Stack sx= { btn }>
                    <Typography>Logout</Typography>
                    <FontAwesomeIcon icon= { solid('sign-out') } />
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Index;