import React, {createContext} from 'react';

export const LoginContext = createContext();
LoginContext.displayName = 'LoginContextName';

const LoginContextProvider = ({children}) => {
    const [isLogin, setLogin] = React.useState(false);

    const logout = () => {
        setLogin(false);
    };

    return (
        <div>
            <LoginContext.Provider value={{isLogin, logout}}>
                {children}
            </LoginContext.Provider>
        </div>
    );
};

export default LoginContextProvider;