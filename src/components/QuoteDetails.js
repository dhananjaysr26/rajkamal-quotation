import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from "./Firebase";
import "./QuoteDetails.css";
function QuoteDetails() {
    const location = useLocation();
    var ID = location.state;
    const [quoteData, setquoteData] = useState([]);
    useEffect(() => {
        const firestore = firebase.database().ref("/QuotRequest").child(ID);
        firestore.on("value", (response) => {
            const data = response.val();
            setquoteData(data);
        });
    }, []);
    console.log(quoteData);
    return (
        <div className="admin-container">
            <div className="admin-window">
                <h1 style={{ textAlign: "center" }}>~Quotation Details~</h1>
                <div className="card-container">
                    <h2>Quotation id : <span className="view">{quoteData.quotaion_id}</span></h2>
                    <h2>Company Name :<span className="view">{quoteData.company}</span> </h2>
                    <h2>Email :<span className="view">{quoteData.email}</span></h2>
                    <h2>Address :<span className="view">{quoteData.address}</span></h2>
                    <h4>Customer Type :  <span className="view">{quoteData.user_type}</span></h4>

                    <h4>Quantities : <span className="view">{quoteData.quantities}</span></h4>

                    <h4>Label Shape : <span className="view">{quoteData.labelShape}</span></h4>

                    <h4>Label Width :<span className="view">{quoteData.label_width}</span></h4>

                    <h4>No. of Colors : <span className="view">{quoteData.colors}</span></h4>

                    <h4>Specific Ink : <span className="view">{quoteData.specific_ink}</span></h4>

                    <h4>Label Stock : <span className="view">{quoteData.label_stock}</span></h4>

                    <h4>Lamination : <span className="view">{quoteData.lamination}</span></h4>

                    <h4>Environment : <span className="view">{quoteData.environment}</span></h4>

                    <h4>Eastimate Amount : <span className="view">{quoteData.estAmt}</span></h4>

                    <h4>Special Instruction :<span className="view">{quoteData.special_instruction}</span></h4>
                    <button className="btn">Download pdf</button>

                </div>
            </div>
        </div>

    )
}

export default QuoteDetails;