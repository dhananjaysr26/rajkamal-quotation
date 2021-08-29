import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logoPic from "./../img/logo.png";
function Home() {
    return (
        <div>
            <div className="content">
                <a href="http://www.rajkamalbarscan.com/">
                    <img src={logoPic} />
                </a>
                <div className="title">Welcome To Rajkamal Barscan</div>
                <p>Get Your Quotation Now!</p>
                <div className="btn-box">
                    <Link to="/quotation-editor"><a className="btn">Edit Quotation</a></Link>
                    <Link to="/quotation-editor"><a className="btn">Create Quotation</a></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
