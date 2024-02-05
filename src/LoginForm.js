import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 로그인 처리 로직 (API 호출 등)
        // 예제에서는 간단히 userId onLogin 콜백으로 전달합니다.
        onLogin(userId);
    };

    return (
        <div>
            <h2>Login</h2>
            <label>userId:</label>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;
