import React from 'react';
import Header from "./Header";

const JoinForm = () => {
    const onJoin = () => {

    }
    return (
        <>
            <div className="login-form">
                <h2 className="login-form__title">Login</h2>

                <form className="login-form__form" onSubmit={(e) => onJoin}>
                    <div>
                        <label htmlFor="name">Username</label>
                        <input className="login-form__input" type="text"
                               id="username"
                               placeholder="Username"
                               name="username"
                               autoComplete="username"
                               required
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
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input className="login-form__input" type="text"
                               id="name"
                               placeholder="name"
                               name="name"
                               autoComplete="name"
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="login-form__input" type="text"
                               id="email"
                               placeholder="email"
                               name="email"
                               autoComplete="email"
                               required
                        />
                    </div>

                    <button className="login-form__button" type="submit">Join</button>
                </form>
            </div>

            </>
    );
};

export default JoinForm;