import React from 'react';
import Header from "../components/Header";
import JoinForm from "../components/JoinForm";
import * as auth from "../apis/auth";
import {useNavigate} from "react-router-dom";

const Join = () => {
    const navigate = useNavigate();

    const join = async (form) => {
        console.log(form);

        let response;
        let data;
        try {
            const response = await auth.join(form);
        } catch (error) {
            console.log(`error: ${error}`);
            return;
        }

        data = response.data;
        const status = response.status;
        console.log(`data: ${data}`);
        console.log(`status: ${status}`);

        if (status === 200) {
            console.log("회원가입 성공");
            navigate('/login');
        } else {
            console.log("회원가입 실패");
        }
    }

    return (
        <>
            <Header/>
            <div className="container">
                <JoinForm join={join}/>
            </div>
        </>
    );
};

export default Join;