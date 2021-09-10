import React, { useState, useEffect } from 'react';
import firebase from "./Firebase";
import "./Admin.css";
const Admin = () => {
    const [quoteData, setquoteData] = useState([]);
    useEffect(() => {
        const firestore = firebase.database().ref("/QuotRequest");
        firestore.on("value", (response) => {
            const data = response.val();
            let Quoteinfo = [];
            for (let id in data) {
                Quoteinfo.push({
                    id: id,
                    quotaion_id: data[id].quotaion_id,
                    email: data[id].email,
                    company: data[id].company,
                    address: data[id].address,
                    city: data[id].city,
                    state: data[id].state,
                    pincode: data[id].pincode,
                    user_type: data[id].user_type,
                    quantities: data[id].quantities,
                    labelShape: data[id].labelShape,
                    label_width: data[id].label_width,
                    colors: data[id].colors,
                    specific_ink: data[id].specific_ink,
                    label_stock: data[id].label_stock,
                    lamination: data[id].lamination,
                    environment: data[id].environment,
                    special_instruction: data[id].special_instruction,
                    estAmt: data[id].estAmt

                });

            }
            setquoteData(Quoteinfo);
        });


    }, []);
    return (
        <div className="admin-container">
            <div className="admin-window">
                <h1 style={{ textAlign: "center" }}>Admin Page</h1>
                <div className="card-container">
                    <div className="card-row">
                        {quoteData.map((data, index) => {
                            return (
                                <div className="card">
                                    <div className="card-header">
                                        <h3>{data.company}</h3>
                                        <h3>Quantities:{data.quantities}</h3>
                                        <h3>Est Amount: {data.estAmt}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>Quotation id : {data.quotaion_id}</p>
                                        <p>Label Stock: T1 Bar</p>
                                        <a href="#" className="btn">View Details</a>
                                    </div>
                                </div>
                            )

                        })

                        }
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Admin
