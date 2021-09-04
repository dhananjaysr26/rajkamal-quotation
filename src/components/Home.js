import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logoPic from "./../img/logo.png";
import { useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
        <div className="container">
            <div className="content">

                <img src={logoPic} alt="" />

                <div className="title">Welcome To Rajkamal Barscan</div>
                <p>Get Your Quotation Now!</p>
                <div className="btn-box">
                    <button className="btn btn-primary" type="submit" onClick={editQuotationBtn}>Edit Quotation</button>


                    <Link to="/quotation-editor">
                        <button className="btn btn-danger m-2" type="submit">
                            Create Quotation
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Home;
