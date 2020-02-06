import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { setToken } from '../helpers/auth-helpers';
// import toastr from 'toastr';
import {
    Switch,
    BrowserRouter as Router,
    Route, 
    Redirect
} from 'react-router-dom';

import Dashboard from '../components/Layout/Dashboard';
import Login from '../components/Auth/Login';
import PasswordRecovery from '../components/Auth/PasswordRecovery';
import Axios from 'axios';


function App() {
    const [user, setUser] = useState(null);

    async function login(email, password) {
        const { data } = await Axios.post('/api/login', {email, password});
        setUser(data.user);
        toastr.success('', 'Iniciaste sesión correctamente');
        setToken(data.token);
    }

    return (
        <Router>
            { user ? <LoginRoutes /> : <LogoutRoutes login={login}/> }
        </Router>
    );
}

function LoginRoutes() {
    useEffect(() => {
        document.body.className = 'hold-transition sidebar-mini';
    });

    return (
        <Switch>
            <Dashboard>
               
            </Dashboard>
        </Switch>
    )
}

function LogoutRoutes({ login }) {
    useEffect(() => {
        document.body.className = 'hold-transition login-page';
    }, []);

    return (
        <Switch>
            <Route 
                path="/login"
                render={props => (
                    <Login {...props} login={login} />
                )}
            />
            <Route path='/password-recovery' component={PasswordRecovery} />

            <Redirect from="/" to="/login"/> 
        </Switch>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
