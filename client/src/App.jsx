// Libraries
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Core
import { GlobalPrvdr } from "core/context/Global"; // Provider
import { AccountPrvdr } from "core/context/Account"; // Provider

// // Layouts
import Signin from "layouts/authentication/sign-in";
import Main from "layouts/pages";

const App = () => {
    const client = new QueryClient();
    localStorage.setItem('nav', window.location.pathname === '/' ? sessionStorage.getItem('token') !== null ? 'dashboard' : 'login' : localStorage.getItem('nav'));

    // Dito yung checking kung may naka-login na ba or wala pa.
    useEffect(() => { if(localStorage.getItem('nav') !== 'login' && sessionStorage.getItem('token') === null) { window.location.href = '/' } }, []);
    return ( 
        <Router>
            <QueryClientProvider client= { client }>
                <GlobalPrvdr>
                    <Routes>
                        <Route path= "*" element= { 
                            sessionStorage.getItem('token') ?
                                <AccountPrvdr><Main /></AccountPrvdr> :
                                <Signin /> } />
                    </Routes>
                </GlobalPrvdr>
            </QueryClientProvider>
        </Router>
    );
}

export default App;