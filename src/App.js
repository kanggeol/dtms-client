import React, { useState } from 'react';
import LoginForm from './LoginForm';
import MainPage from './MainPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const handleLogin = (user) => {
    // 실제 로그인 로직을 여기에 추가
    // 성공 시 setLoggedIn(true) 등으로 상태 변경

    // 여기서는 간단히 userId을 설정하고 로그인 상태 변경
    setUserId(user);
    setLoggedIn(true);
  };

  return (
      <div>
        {loggedIn ? (
            <MainPage userId={userId} />
        ) : (
            <LoginForm onLogin={handleLogin} />
        )}
      </div>
  );
};

export default App;
