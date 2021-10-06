import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";


const App = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/"><HomePage/></Route>
                <Route pasth="/cart"><Cart/></Route>
            </Layout>
        </Router>
    );
};

export default App;