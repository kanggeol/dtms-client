import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {LoginContext} from "../contexts/LoginContextProvider";

const Header = () => {
    const {isLogin,LogOut} = useContext(LoginContext);

    return (
        <div>
            <header>
                <div className="logo">
                    <img src="https://www.dtms.com/images/dtms-logo.png" alt="DTMS Logo"/>
                </div>
                <div className="util">
                    {!isLogin ?
                        <ul>
                            <li><Link to="/Login">Login</Link></li>
                            <li><Link to="/Join">Join</Link></li>
                            <li><Link to="/About">About</Link></li>
                        </ul>
                        :
                        <ul>
                            <li><Link to="/User">MyPage</Link></li>
                            <li>
                                <button className='link' onClick={() => LogOut()}>LogOut</button>
                            </li>
                        </ul>
                    }
                </div>
            </header>
        </div>
    );
};

export default Header;
