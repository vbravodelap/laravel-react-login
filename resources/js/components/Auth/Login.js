import React, { useState } from "react";
import { Link } from "react-router-dom";
import toastr from 'toastr';

export default function Login({ login }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function handleInputChange(e) {
        e.preventDefault();

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await login(user.email, user.password);
        }catch(err) {
            toastr.error('Error al iniciar sesión', err.response.data.error);
        }
    }

    return (
        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html">
                    <b>Control</b>Gastos
                </a>
            </div>
            {/* /.login-logo */}
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Entra para inciar sesión</p>
                    <form onSubmit={handleSubmit} method="post">
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                onChange={handleInputChange}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* /.col */}
                            <div className="col-4 offset-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Entrar
                                </button>
                            </div>
                            {/* /.col */}
                        </div>
                    </form>
                    {/* /.social-auth-links */}
                    <p className="mb-2 mt-2 offset-2">
                        <Link to="/password-recovery">
                            No recuerdo mi contraseña
                        </Link>
                    </p>
                </div>
                {/* /.login-card-body */}
            </div>
        </div>
    );
}
