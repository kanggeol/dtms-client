import React, {useContext} from 'react';
import {LoginContext} from "../contexts/LoginContextProvider";

const LoginForm = () => {
    const {login}=useContext(LoginContext)
    const onLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;
        login(username, password);
    }
    return (
        <div className="login-form">
            <h2 className="login-form__title">Login</h2>

            <form className="login-form__form" onSubmit={(e) => onLogin(e)}>
                <div>
                    <label htmlFor="name">Username</label>
                    <input className="login-form__input" type="text"
                           id="username"
                           placeholder="Username"
                           name="username"
                           autoComplete="username"
                           required
                           //TODO: 아이디 저장
                        // defaultValue={}
                    />
                </div>
                <div>
                    <label className="login-form__label">password</label>
                    <input className="login-form__input" type="password"
                           id="password  "
                           placeholder="password"
                           name="password"
                           autoComplete="password"
                           required
                        // defaultValue={}
                    />
                </div>
                <button className="login-form__button" type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;