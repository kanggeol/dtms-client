import React, {createContext, useEffect} from 'react';
import api from "../apis/api";
import Cookies from "js-cookie";
import * as auth from "../apis/auth";
import {useNavigate} from "react-router-dom";
import * as Swal from "/apis/alert";


export const LoginContext = createContext();
LoginContext.displayName = 'LoginContextName';

//로그인 관련해서 로그인체크, 로그인, 로그아웃 정보 가져옴
const LoginContextProvider = ({children}) => {
    //로그인 여부
    const [isLogin, setLogin] = React.useState(false);
    //유저정보
    const [userInfo, setUserInfo] = React.useState({});
    //권한정보
    const [roles, setRoles] = React.useState({isUesr: false, isAdmin: false});
    //아이디 저장
    const [remeberId, setRemeberId] = React.useState(localStorage.getItem('id'));
//페이지 이동
    const navigate = useNavigate();

    const loginCheck = async () => {
        //jwt로 사용자 정보 요청
        const accessToken = Cookies.get("accessToken");
        console.log(`accessToken : ${accessToken}`);

        //헤더에 jwt 담기
        if (!accessToken) {
            alert('쿠기에 accessToken이 없습니다.');
            logoutSetting();
            return;
        }
        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        //사용자 정보요청
        try {
            const response = await auth.info();
            const data = response.data;
            console.log(`data : ${data}`);

            //인증실패
            if (data == "UNAUTHRIZED" || response.status == 401) {
                console.error('accessToken 이 만료되었거나 인증에 실패');
                return;
            }

            //인증성공
            loginSetting(data, accessToken);
        } catch (error) {
            console.log(`error : ${error}`);
            console.log('status: ' + error.response.status);
            return;
        }
    }
    //로그인 - /login 으로 id,password를 보내면 jwtoken을 반환, /info에 jwt로 유저정보 요청
    const login = async (username, password) => {

        try {
            const response = await auth.login('/api/login', {
                username,
                password
            });
            const data = response.data;
            const status = response.status;
            const headers = response.headers;
            const authroization = headers.authorization;
            const accessToken = authroization.replace('Bearer ', '');
            // localStorage.setItem('id',username);

            console.log(`data : ${data}`);
            console.log(`status : ${status}`);
            console.log(`headers : ${headers}`);
            console.log(`jwt : ${accessToken}`);

            if (status === 200) {
                Cookies.set("accessToken", accessToken);
                //로그인 체크
                loginCheck();
                Swal.alert('로그인 성공', '메인 화면으로 갑니다.', 'success',() => {
                    navigate('/');
                });

                //메인페이지로 이동
                navigate('/');
            }
        } catch (error) {
            Swal.alert('로그인 실패', '아이디 또는 비밀번호가 일치하지 않습니다.', 'error');
        }
    }
    //로그인 세팅
    const loginSetting = (userData, accessToken) => {
        const {no, userId, authList} = userData;
        const roleList = authList.map((auth) => auth.auth);

        console.log(`no : ${no}`);
        console.log(`userId : ${userId}`);
        console.log(`authList : ${authList}`);
        console.log(`roleList : ${roleList}`);

        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        setLogin(true);
        const updatedUserInfo = {no, userId, roleList}
        setUserInfo(updatedUserInfo);

        const updatedRoles = {isUser: false, isAdmin: false};
        roleList.forEach((role) => {
            if (role === 'ROLE_USER') {
                updatedRoles.isUser = true;
            }
            if (role === 'ROLE_ADMIN') {
                updatedRoles.isAdmin = true;
            }
        })
        setRoles(updatedRoles);
    }
    const logoutSetting = () => {
        api.defaults.headers.common.Authorization = null;
        Cookies.remove("accessToken");
        setLogin(false);
        setUserInfo(null);
        setRoles(null);
    }
    const logout = (force=false) => {
        if(force){
            logoutSetting()
            navigate('/')
            return
        }

        const check = window.confirm('로그아웃하시겠습니까?');

        Swal.confirm('로그아웃하시겠습니까?', '로그아웃을 진행합니다.', 'warning',
            (result) => {
                if (result.isConfirmed) {
                    logoutSetting()
                    navigate('/');
                }
            }
        );
    };

    //새로고침해도 로그인이 풀리지 않게 처리
    useEffect(() => {
        loginCheck();
    }, []);

    return (
        <div>
            <LoginContext.Provider value={{isLogin, userInfo, roles, login, loginCheck,logout}}>
                {children}
            </LoginContext.Provider>
        </div>
    );
};

export default LoginContextProvider;