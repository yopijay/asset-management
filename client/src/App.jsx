// Libraries
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
    localStorage.setItem('nav', window.location.pathname === '/' ? 'dashboard' : localStorage.getItem('nav'));

    return ( 
        <Router>
            <QueryClientProvider client= { client }>
                <GlobalPrvdr>
                    <Routes>
                        <Route path= "*" element= { localStorage.getItem('token') ?
                            <AccountPrvdr><Main /></AccountPrvdr> :
                            <Signin /> } />
                    </Routes>
                </GlobalPrvdr>
            </QueryClientProvider>
        </Router>
    );
}

export default App;