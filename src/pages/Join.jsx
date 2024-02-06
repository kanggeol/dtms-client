import React from 'react';
import Header from "../components/Header";
import JoinForm from "../components/JoinForm";

const Join = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <JoinForm />
            </div>
        </>
    );
};

export default Join;