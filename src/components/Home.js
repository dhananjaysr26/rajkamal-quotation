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
        if (Qid === "") {
            alert("Sorry! Quotation Id Require For this Action!");
        } else if (Qid === null) {
        }
        else {
            history.push({
                pathname: '/quotation-editor',
                state: Qid
            });
        }
    }
    function createQuotationBtn() {
        history.push("/quotation-editor");
    }
    return (

        <div className="content">
            <img className="logo-image" src={logoPic} alt="" />
            <div className="title">Welcome To Rajkamal Barscan</div>
            <p>Estimate Your <span class="type">Quotation <span> Now!</span></span></p>
            <div className="homeBtn-box">
                <button className="homeBtn bouncy" type="submit" onClick={editQuotationBtn}>Edit Quotation</button>
                <button className="homeBtn bouncy" style={{ marginLeft: "10px", backgroundColor: "#f58442", animationDelay: "0.14s" }} type="submit" onClick={createQuotationBtn}>
                    Create Quotation
                </button>
            </div>
            <section class="portfolio-experiment">
                <Link to="/know-more">
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
