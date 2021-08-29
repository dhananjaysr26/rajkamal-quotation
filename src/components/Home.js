import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logoPic from "./../img/logo.png";
import { useHistory } from "react-router-dom";
function Home() {
    let history = useHistory();
    function editQuotationBtn() {
        var Qid = prompt("Please enter your Quotation ID:");
        if (Qid != null) {
            history.push({
                pathname: '/quotation-editor',
                state: Qid
            });
        }
    }
    return (
        <div>
            <div className="content">
                <a href="http://www.rajkamalbarscan.com/">
                    <img src={logoPic} alt="" />
                </a>
                <div className="title">Welcome To Rajkamal Barscan</div>
                <p>Get Your Quotation Now!</p>
                <div className="btn-box">
                    <button className="btn" type="submit" onClick={editQuotationBtn}>Edit Quotation</button>


                    <Link to="/quotation-editor">
                        <button className="btn" type="button">
                            Create Quotation
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Home;
