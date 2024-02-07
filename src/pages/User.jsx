import React, {useContext, useEffect} from 'react';
import Header from "../components/Header";
import UserForm from "../components/UserForm";
import * as auth from "../apis/auth";
import {LoginContext} from "../contexts/LoginContextProvider";
import {useNavigate} from "react-router-dom";

const User = () => {
    const [userInfo, setUserInfo] = React.useState();
    const {isLogin, roles, logout} = useContext(LoginContext);
    const navigate = useNavigate();
    const getUserInfo = async () => {

        //로그인상태가 아니거나 USER권한이 없으면 로그인 페이지로 이동
        if (!isLogin || !roles.isUser) {
            navigate('/login');
            return;
        }
        const response = await auth.info();
        const data = response.data;
        console.log(`getUserInfo`);
        console.log(data);
        setUserInfo(data);

    }

    const updateUser = async (form) => {
        let response;
        let data;
        try {
            response = await auth.update(form);
            data = response.data;
            console.log(`updateUser`);
            console.log(data);
            setUserInfo(data);
        } catch (error) {
            console.log(`${error}`);
        }

        data = response.data;
        const status = response.status;
        console.log(`data: ${data}`);
        console.log(`status: ${status}`);
        if (status === 200) {
            console.log(`회원정보 수정 성공`);
            alert(`회원정보 수정 성공`);
            logout();
        } else {
            console.log(`updateUser failed`);
            alert(`회원정보 수정 실패`);
            return;
        }
    }

    const deleteUser = async (userId) => {
        let response;
        let data;
        try {
            response = await auth.remove(userId);

            data = response.data;
            console.log(`deleteUser`);
            console.log(data);
            setUserInfo(data);
        } catch (error) {
            console.log(`${error}`);
            console.log(`회원삭제 중 에러 발생`);
            return;
        }

        data = response.data;
        const status = response.status;
        console.log(`data: ${data}`);
        console.log(`status: ${status}`);

        if (status === 200) {
            console.log(`회원정보 삭제 성공`);
            alert(`회원정보 삭제 성공`);
            logout();
        } else {
            console.log(`회원정보 삭제 실패`);
            alert(`회원정보 삭제 실패`);
            return;
        }

    }

    useEffect(() => {
        if (!isLogin) {
            return;
        }
        getUserInfo();
    }, [isLogin]);

    return (
        <>
            <Header/>
            <div className="container">
                <h1>User</h1>
                <UserForm userInfo={userInfo} updateUser={updateUser} deleteUser={deleteUser}/>
            </div>
        </>
    );
};

export default User;