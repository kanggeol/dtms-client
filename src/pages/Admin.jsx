import React, {useContext, useEffect} from 'react';
import Header from "../components/Header";
import {LoginContext} from "../contexts/LoginContextProvider";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    const {isLogin, userInfo, roles} = useContext(LoginContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLogin || !userInfo) {
            alert('로그인이 필요합니다.');
            navigate('/login')
            return;
        }
        if (!roles.isAdmin) {
            alert('관리자가 아닙니다.');
            navigate(-1);
            return;
        }

    }, [userInfo]);
    return (
        <>
            {isLogin && roles.isAdmin &&
                <>
                    <Header/>
                    <div className="container">
                        <h1>Admin</h1>
                        <hr/>
                        <h2>Admin Page</h2>
                    </div>
                </>
            }
        </>
    );
};

export default Admin;