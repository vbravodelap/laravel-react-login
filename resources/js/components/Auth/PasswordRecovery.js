import React from 'react';
import { Link } from 'react-router-dom';

export default function PasswordRecovery() {
    return (
        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>Control</b>Gastos</a>
            </div>
            {/* /.login-logo */}
            <div className="card">
                <div className="card-body login-card-body">
                <p className="login-box-msg">¿No recuerdas tu cotraseña?, Aqui puedes recuperarla facilmente.</p>
                <form action="recover-password.html" method="post">
                    <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-block">Solicitar nueva contraseña</button>
                    </div>
                    {/* /.col */}
                    </div>
                </form>
                <p className="mt-3 mb-1 offset-5">
                    <Link to="/login">Entrar</Link>
                </p>
                </div>
                {/* /.login-card-body */}
            </div>
        </div>
    );
}