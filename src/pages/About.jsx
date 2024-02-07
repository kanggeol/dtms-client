import React from 'react';
import Header from "../components/Header";
import LoginContextConsumer from "../contexts/LoginContextConsumer";

const About = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <h1>About</h1>
                <hr/>
                <h2>About Page</h2>
                <LoginContextConsumer />
            </div>
        </>
    );
};

export default About;