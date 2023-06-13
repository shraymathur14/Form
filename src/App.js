import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Welcome from './component/Welcome';
const App = () => {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Login / > }
        /> <
        Route path = "/Login"
        element = { < Login / > }
        /> <
        Route path = "/Welcome"
        element = { < Welcome / > }
        /> <
        /Routes> <
        /Router>
    );
};

export default App;