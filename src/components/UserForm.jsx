import React from 'react';


const UserForm = ({userInfo, updateUser, deleteUser}) => {
    const onUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const userId = form.username.value;
        const password = form.password.value;
        const name = form.name.value;
        const email = form.email.value;
        console.log(userId, password, name, email);

        updateUser({userId, password, name, email});
    }
    return (
        <div className="login-form">
            <h2 className="login-form__title">UserInfo</h2>

            <form className="login-form__form" onSubmit={(e) => onUpdate(e)}>
                <div>
                    <label htmlFor="name">Username</label>
                    <input className="login-form__input" type="text"
                           id="username"
                           placeholder="Username"
                           name="username"
                           autoComplete="username"
                           required
                           readOnly
                           defaultValue={userInfo?.userId}
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
                           defaultValue={userInfo?.name}
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
                           defaultValue={userInfo?.email}
                    />
                </div>

                <button className="login-form__button" type="submit" >정보 수정</button>
                <button className="login-form__button" type="button" onClick={(e) => deleteUser(e)}>정보 삭제</button>
            </form>
        </div>
    );
};

export default UserForm;

