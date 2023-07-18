// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core
import { GlobalPrvdr } from "core/context/Global"; // Provider
// import { AccountPrvdr } from "core/context/Account"; // Provider

// // Layouts
// import Signin from "layouts/authentication/sign-in";
import Main from "layouts/pages";

const App = () => {
    localStorage.setItem('nav', window.location.pathname === '/' ? 'dashboard' : localStorage.getItem('nav'));

    return ( 
        <Router>
            <GlobalPrvdr>
                <Routes>
                    <Route path= "*" element= { <Main /> } />
                    {/* <Route path= "*" element= { sessionStorage.getItem('token') ?
                        <AccountPrvdr>MAIN</AccountPrvdr> :
                        <Signin /> } /> */}
                </Routes>
            </GlobalPrvdr>
        </Router>
    );
}

export default App;