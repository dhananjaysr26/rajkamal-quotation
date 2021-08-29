import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <div className="content">
                <a href="http://www.rajkamalbarscan.com/">
                    <img src="http://www.rajkamalbarscan.com/assets/images/logo.png" />
                </a>
                <div className="title">Welcome To Rajkamal Barscan</div>
                <p>Get Your Quotation Now!</p>
                <div>
                    <Link to="/quotation-editor"><a className="btn">New Quotation</a></Link>
                    <Link to="/quotation-editor"><a className="btn">New Quotation</a></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
