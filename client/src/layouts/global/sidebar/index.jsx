// Libraries
import { useContext } from "react";
import { Stack, SwipeableDrawer } from "@mui/material";

// Core
import { GlobalCntxt } from "core/context/Global"; // Context

// Components
import Navs from "./components/Navs";
import Account from "./components/Account";
import Logout from "./components/Logout";

// Constants
import { accountfix, accountswipe, fix, nav, navfix, navswipe, sidebar, swipable, swipe } from "./style"; // Styles
import { Link } from "react-router-dom";

const Index = () => {
    const { container, drawerToggle, open, setopen } = useContext(GlobalCntxt);

    return (
        <Stack sx= { sidebar }>
            <SwipeableDrawer anchor= "left" variant= "temporary" ModalProps= {{ keepMounted: true }} container= { container }
                onOpen= { drawerToggle(true) } open= { open.left } onClose={ drawerToggle(false) } sx= { swipe }>
                <Stack sx= { swipable } spacing= { 2 }>
                    <Stack sx= { nav } spacing= { 6 }>
                        <Stack sx= { accountswipe } component= { Link } to= "/profile" onClick= { () => setopen({ left: false }) }><Account /></Stack>
                        <Stack sx= { navswipe }><Navs /></Stack>
                    </Stack>
                    <Logout />
                </Stack>
            </SwipeableDrawer>
            <Stack sx= { fix } spacing= { 2 }>
                <Stack sx= { nav } spacing= { 3 }>
                    <Stack sx= { accountfix } component= { Link } to= "/profile"><Account /></Stack>
                    <Stack sx= { navfix }><Navs /></Stack>
                </Stack>
                <Logout />
            </Stack>
        </Stack>
    );
}

export default Index;