import React, { useState } from "react";
import "./QuotationEditor.css";
import { useHistory } from "react-router-dom";
import firebase from "./Firebase";
import emailjs from "emailjs-com";
function QuotationEditor(props) {
  let history = useHistory();
  //getting props
  // var Qid = props.location.statel
  var Qid = 77779;
  const initial_valueObj = {
    quotaion_id: "",
    email: "",
    company: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    user_type: "",
    quantities: "",
    labelShape: "",
    label_width: "",
    colors: "",
    specific_ink: "",
    label_stock: "",
    lamination: "",
    environment: "",
    special_instruction: "",
    estAmt: ""

  }
  var [formvalues, setFormvalues] = useState(initial_valueObj);
  const inputChangeHandler = e => {
    var { name, value } = e.target;
    setFormvalues({
      ...formvalues, [name]: value
    })


  }
  const select_LabelStock = () => {
    let selectValue = document.getElementById("LabelStock-select").value;
    setFormvalues({
      ...formvalues, label_stock: selectValue
    })

  }
  const select_InkColors = () => {
    let selectValue = document.getElementById("Ink-select").value;
    setFormvalues({
      ...formvalues, colors: selectValue
    })

  }
  const select_labelShape = () => {
    let selectValue = document.getElementById("LabelShape-select").value;
    setFormvalues({
      ...formvalues, labelShape: selectValue
    })

  }
  const select_labelWidth = () => {
    let selectValue = document.getElementById("LabelWidth-select").value;
    setFormvalues({
      ...formvalues, label_width: selectValue
    })

  }
  const submitForm = (e) => {
    setFormvalues({
      ...formvalues, quotaion_id: Qid
    })
    setFormvalues({
      ...formvalues, estAmt: "7000"
    })

    e.preventDefault();
    emailjs.sendForm('service_35hhill', 'template_prywkna', e.target, 'user_0M8WtJhXCYbJIxLRvbOlb')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    alert("Email Sent");
    const firestore = firebase.database().ref("/QuotRequest");
    let data = formvalues;
    firestore.push(data);
    console.log("!User Submit Data!");
    console.log(formvalues);
    alert("Request Has Been Submited Successfully!\nWe will Connect you Soon!");
    history.push("/");
  };

  //Radio Button
  let IAM = ["Broker", "Commercial Printer", "Graphic Designer", "Adertising Agency", "Other"];
  let Lamination = ["Yes", "No"];
  let Environment = ["Indoor", "Outdoor"];
  //select
  let labelStock = ["One", "Two", "Three"];
  let InkColors_list = ["Black", "Blue", "Pink"];
  let LabelShape_list = ["Circle", "Rectangle", "Square"];
  let LabelWidth_list = ["5x6", "6x9", "8x12", "other"];
  //amount
  let [Amt, setAmt] = useState(1000);
  // ******************************************************************************************************
  //Type Prize
  let [Ltype, setLtype] = useState(0);
  var typeDict = {
    "0": 0,
    "Bar": 100,
    "Label1": 200,
    "Label2": 300,
    "Label3": 400
  };
  //onSelect Amt Change
  function typeChange() {
    let selectType = document.getElementById('select-type');

    setAmt(Amt + typeDict[selectType.value] - Ltype);
    setLtype(typeDict[selectType.value]);


  }
  // ******************************************************************************************************
  //Size Prize
  let [Lsize, setLsize] = useState(0);
  var sizeDict = {
    "0": 0,
    "Size1": 100,
    "Size2": 200,
    "Size3": 300,
    "Size4": 400
  };
  //onSelect Amt Change
  function sizeChange() {
    let selectSize = document.getElementById('select-size');
    setAmt(Amt + sizeDict[selectSize.value] - Lsize);
    setLsize(sizeDict[selectSize.value]);


  }
  // ******************************************************************************************************
  //Paper Prize
  let [Lpaper, setLpaper] = useState(0);
  var paperDict = {
    "0": 0,
    "Normal": 100,
    "Paper-1": 200,
    "Paper-2": 300,
    "Paper-3": 400
  };
  //onSelect Amt Change
  function paperChange() {
    let selectPaper = document.getElementById('select-paper');

    setAmt(Amt + paperDict[selectPaper.value] - Lpaper);
    setLpaper(paperDict[selectPaper.value]);

  }
  // ******************************************************************************************************
  //Ink Prize
  let [L_ink, setL_ink] = useState(0);
  var inkDict = {
    "0": 0,
    "Ink-1": 500,
    "Ink-2": 1000
  };
  //onSelect Amt Change
  function inkChange() {
    let selectInk = document.getElementById('select-ink');
    setAmt(Amt + inkDict[selectInk.value] - L_ink);
    setL_ink(inkDict[selectInk.value]);

  }
  // ******************************************************************************************************
  //Customer Prize
  // let [Lamination, setLamination] = useState(0);
  // var LaminationDict = {
  //   "Yes": 1000,
  //   "No": 0
  // };
  // //onSelect Amt Change
  // function LaminationChange() {
  //   let selectLamination = document.querySelectorAll('input[name="lamination"]');
  //   let selectedLaminationType;
  //   for (const SC of selectLamination) {
  //     if (SC.checked) {
  //       selectedLaminationType = SC.value;
  //       break;
  //     }
  //   }
  //   setAmt(Amt + LaminationDict[selectedLaminationType] - LLaminationType);
  //   setLLaminationType(LaminationDict[selectedLaminationType]);

  // }

  return (
    <div>
      <div className="container">
        <div className="register">
          <diV className="total-container">
            <div className="total-register">
              <h3 className="total_var">Est. Total&nbsp;:</h3><h4 className="total_value">&nbsp;{Amt}&nbsp;₹</h4>
            </div>
          </diV>
          <div className="head-box">
            <h1 className="form-heading">Online Quote Request Form</h1>
            <h5 className="form-hint">Fields marked with <label className="required" /> are required</h5>
          </div>
          <form className="myform" onSubmit={submitForm}>
            <div className="form-element">
              <label for="ip1" className="Q-form-label">Quotation Id:</label>
              <input type="number" className="Q-form-input" value={Qid} id="ip15" readOnly />
            </div>
            <div className="form-element">
              <label for="ip1" className="form-label required">Email address</label>
              <input type="email" className="form-input" id="ip1" placeholder="name@example.com" name="email" value={formvalues.email} onChange={inputChangeHandler} required />
            </div>
            <div className="form-element">
              <label for="ip2" className="form-label required">Company</label>
              <input type="text" className="form-input" id="ip2" placeholder="Company Name" name="company" value={formvalues.company} onChange={inputChangeHandler} required />
            </div>
            <div className="form-element">
              <label for="ip3" className="form-label required">Address</label>
              <input type="text" className="form-input" id="ip3" placeholder="Enter your Address" name="address" value={formvalues.address} onChange={inputChangeHandler} required />
            </div>
            <div className="form-element">
              <label for="ip4" className="form-label required">City</label>
              <input type="text" className="form-input" id="ip4" placeholder="Enter Your City" name="city" value={formvalues.city} onChange={inputChangeHandler} required />
            </div>
            <div className="form-element">
              <label for="ip5" className="form-label required">State</label>
              <input type="text" className="form-input" id="ip5" placeholder="Enter Your State" name="state" value={formvalues.state} onChange={inputChangeHandler} required />
            </div>
            <div className="form-element">
              <label for="ip6" className="form-label required">PinCode</label>
              <input type="number" className="form-input" id="ip6" placeholder="Enter Your Pincode" name="pincode" value={formvalues.pincode} onChange={inputChangeHandler} required />
            </div>
            <div className="form-element">
              <label for="radio1" className="form-label  required">I am</label>
              <div className="form__radio">
                {IAM.map(result => (
                  <React.Fragment>
                    <div className="form-radio-margin">
                      <input className="form-radio-input" type="radio" id="radio1" name="user_type" value={result} onChange={inputChangeHandler} required />
                      <label className="form-radio-label" for="radio1">{result}</label>
                    </div>
                  </React.Fragment>
                ))}

              </div>

            </div>

            <div className="form-element">
              <label for="ip8" className="form-label  required">Quantities</label>
              <input type="number" className="form-input" id="ip8" placeholder="Enter Your Quantity" name="quantities" value={formvalues.quantities} onChange={inputChangeHandler} required />
            </div>
            <div className="form-element">
              <label className="form-label required">Label Shape</label>
              <select class="form-select" aria-label="Default select example" id="LabelShape-select" onChange={select_labelShape} required>
                <option value="0">-Select-</option>
                {LabelShape_list.map(result => (
                  <React.Fragment>

                    <option name="labelShape" value={result}>{result}</option>
                  </React.Fragment>
                ))}
              </select>

            </div>
            <div className="form-element">
              <label className="form-label required">Label Width (inches) </label>
              <select class="form-select" aria-label="Default select example" id="LabelWidth-select" onChange={select_labelWidth} required>
                <option value="0">-Select-</option>
                {LabelWidth_list.map(result => (
                  <React.Fragment>

                    <option name="label_width" value={result}>{result}</option>
                  </React.Fragment>
                ))}
              </select></div>
            <div className="form-element">
              <label for="ip9" className="form-label  required">Number of Colors</label>
              <input type="number" className="form-input" id="ip9" placeholder="colours count" name="colors" value={formvalues.colors} onChange={inputChangeHandler} required />
            </div>
            <div className="form-element">
              <label for="ip14" className="form-label required">Specific Ink Colours </label>
              <select class="form-select" aria-label="Default select example" id="Ink-select" onChange={select_InkColors} required>
                <option value="0">-Select-</option>
                {InkColors_list.map(result => (
                  <React.Fragment>

                    <option name="colors" value={result}>{result}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>
            <div className="form-element">
              <label for="ip14" className="form-label required">Label Stock  </label>
              <select class="form-select" aria-label="Default select example" id="LabelStock-select" onChange={select_LabelStock} required>
                <option value="0">-Select-</option>
                {labelStock.map(result => (
                  <React.Fragment>

                    <option name="label_stock" value={result}>{result}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>
            <div className="form-element">
              <label for="radioLam" className="form-label required">Lamination</label>
              {Lamination.map(result => (
                <React.Fragment>
                  <div className="form-radio">
                    <input className="form-radio-input" type="radio" name="lamination" value={result} onChange={inputChangeHandler} required />
                    <label className="form-radio-label" for="radioLam">{result}</label>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="form-element">
              <label for="env-radio" className="form-label required">Environment</label>
              {Environment.map(result => (
                <React.Fragment>
                  <div className="form-radio">
                    <input className="form-radio-input" type="radio" name="environment" value={result} onChange={inputChangeHandler} required />
                    <label className="form-radio-label" for="env-radio">{result}</label>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div class="form-element">
              <label for="textarea" class="form-label">Special Instructions</label>
              <textarea class="form-input" id="textarea" rows="4" name="special_instruction" value={formvalues.special_instruction} onChange={inputChangeHandler}></textarea>
            </div>
            <button className="submitBtn" style={{ textAlign: "center" }} >Submit</button>
          </form>
        </div>
      </div>
      <div className="hint-container">
        <div className="hint-register">
          <h1>Label Stock</h1>
          <h3>Please note:</h3>
          <h5>This is only a small sampling of available materials. If you do not see something that suits your label application, select ‘other’ and a customer service representative will be in touch with you.</h5>
          <h3>Semi Gloss with Regular Permanent Adhesive</h3>
          <h5>This is our most commonly used material for indoor applications. Colours truly pop when printed on Semi Gloss, leaving you with a smooth, high quality label. In addition to it’s attractive qualitities, it’s extremely cost effective.</h5>
          <h3>2mil Extraclear</h3>
          <h5>This transparent material has a regular permanent adhesive and a provides a high quality glossy finish. It can be laminated for water resistance, but will not withstand submersion. Suitable for indoor application only.</h5>
          <h3>3mil White Polylyte</h3>
          <h5>This is an inexpensive, durable film stock with an attractive pearly shine to it. When laminated, it is resistant to water and chemicals. This stock has a regular permanent adhesive and is not suitable for outdoor use.</h5>
          <h3>3mil Thermlyte with Drum Adhesive</h3>
          <h5>This is an extremely durable film stock that is suitable for outdoor use. Drum adheisve is especially suited for metal surfaces, such as drums. When laminated it is resistant to water and chemicals, but will not withstand submersion. Our labels manufactured with this material generally last up to a year in an outdoor environment.</h5>
          <h3>Bright Foil</h3>
          <h5>Silver or gold foil label material is a metalized paper with a premium glossy finish. Common applications include specialty address labels, anniversary labels, or any situation in which you would want to make a special impression. Available in silver, or gold. Suitable for indoor use only.</h5>
          <h3>Dull Foil</h3>
          <h5>Similar to Bright Foil, Dull Foil is available in silver or gold and has a dull, matte finish. Suitable for indoor use only.</h5>
        </div>
      </div>
    </div>
  );
}

export default QuotationEditor;
