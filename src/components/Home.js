import React from "react";
import "./Home.css";
import "./learnMore.scss";
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

        <div className="content">
            <img src={logoPic} alt="" />

            <div className="title">Welcome To Rajkamal Barscan</div>
            <p>Estimate Your <span class="type">Quotation <span> Now!</span></span></p>
            <div className="homeBtn-box">
                <button className="homeBtn bouncy" type="submit" onClick={editQuotationBtn}>Edit Quotation</button>


                <Link to="/quotation-editor">
                    <button className="homeBtn bouncy" style={{ backgroundColor: "#f58442", animationDelay: "0.14s" }} type="submit">
                        Create Quotation
                    </button>
                </Link>

            </div>
            <section class="portfolio-experiment">
                <Link to="/quotation-editor">
                    <span class="text">Know More!</span>
                    <span class="line -right"></span>
                    <span class="line -top"></span>
                    <span class="line -left"></span>
                    <span class="line -bottom"></span>
                </Link>
            </section>
        </div>

    );
}

export default Home;
