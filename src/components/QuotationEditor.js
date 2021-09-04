import React, { useState } from "react";
import "./QuotationEditor.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function QuotationEditor(props) {
  //getting props
  var Qid = props.location.state;
  if (!Qid) {
    Qid = Math.floor(Math.random() * 9000);
  }
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
  let [LcustType, setLcustType] = useState(0);
  var custDict = {
    "Regular": 0,
    "OneTime": 1000
  };
  //onSelect Amt Change
  function custChange() {
    let selectCust = document.querySelectorAll('input[name="cust-type"]');
    let selectedCustType;
    for (const SC of selectCust) {
      if (SC.checked) {
        selectedCustType = SC.value;
        break;
      }
    }
    setAmt(Amt + custDict[selectedCustType] - LcustType);
    setLcustType(custDict[selectedCustType]);

  }

  return (
    <div className="container">
      <h1 className="text-center">Online Quote Request Form</h1>
      <p className="text-center">Fields marked with an * are required</p>
      <div className="mb-3">
        <label for="ip1" className="form-label required" required>Email address</label>
        <input type="email" className="form-control" id="ip1" placeholder="name@example.com" required />
      </div>
      <div className="mb-3">
        <label for="ip2" className="form-label">Company</label>
        <input type="email" className="form-control" id="ip2" placeholder="Company Name" />
      </div>
      <div className="mb-3">
        <label for="ip3" className="form-label">Address</label>
        <input type="email" className="form-control" id="ip3" placeholder="Enter your Address" />
      </div>
      <div className="mb-3">
        <label for="ip4" className="form-label">City</label>
        <input type="email" className="form-control" id="ip4" placeholder="Enter Your City" />
      </div>
      <div className="mb-3">
        <label for="ip5" className="form-label">State</label>
        <input type="email" className="form-control" id="ip5" placeholder="Enter Your State" />
      </div>
      <div className="mb-3">
        <label for="ip6" className="form-label">PinCode</label>
        <input type="email" className="form-control" id="ip6" placeholder="Enter Your Pincode" />
      </div>
      <div className="mb-3">
        <label for="ip7" className="form-label">Email</label>
        <input type="email" className="form-control" id="ip7" placeholder="Enter Your Email" />
      </div>
      <label for="radio1" className="form-label">I am</label>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="radio1" id="radio1" />
        <label className="form-check-label" for="radio1">Broker</label>
      </div>
      <div class="form-check">
        <input className="form-check-input" type="radio" name="radio1" id="radio2" />
        <label className="form-check-label" for="radio2"> Commercial Printer</label>
      </div>
      <div class="form-check">
        <input className="form-check-input" type="radio" name="radio1" id="radio3" />
        <label className="form-check-label" for="radio3"> Graphic Designer</label>
      </div>
      <div class="form-check">
        <input className="form-check-input" type="radio" name="radio1" id="radio4" />
        <label className="form-check-label" for="radio4"> Advertising Agency</label>
      </div>
      <div class="form-check">
        <input className="form-check-input" type="radio" name="radio1" id="radio5" />
        <label className="form-check-label" for="radio5"> Other</label>
      </div>

      <div className="mb-3">
        <label for="ip8" className="form-label">Quantities</label>
        <input type="email" className="form-control" id="ip8" placeholder="Enter Your Quantity" />
      </div>
      <select class="form-select" aria-label="Default select example">
        <label for="ip12" className="form-label">Label Size</label>
        <option value="0">-Select-</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <label for="ip13" className="form-label">Label Width (inches) </label>
        <option value="0">-Select-</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="mb-3">
        <label for="ip9" className="form-label">Number of Colors</label>
        <input type="email" className="form-control" id="ip9" placeholder="colours count" />
      </div>
      <select class="form-select" aria-label="Default select example">
        <label for="ip14" className="form-label">Specific Ink Colours </label>
        <option value="0">-Select-</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <label for="ip14" className="form-label">Label Stock  </label>
        <option value="0">-Select-</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label for="radio1" className="form-label">Lamination</label>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="radio2" id="radio1" />
        <label className="form-check-label" for="radio1">Yes</label>
      </div>
      <div class="form-check">
        <input className="form-check-input" type="radio" name="radio2" id="radio2" />
        <label className="form-check-label" for="radio2"> No</label>
      </div>
      <label for="radio1" className="form-label">Environment</label>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="radio3" id="radio1" />
        <label className="form-check-label" for="radio1">Indoor</label>
      </div>
      <div class="form-check">
        <input className="form-check-input" type="radio" name="radio3" id="radio2" />
        <label className="form-check-label" for="radio2">Outdoor</label>
      </div>
      <div class="mb-3">
        <label for="textarea" class="form-label">Special Instructions</label>
        <textarea class="form-control" id="textarea" rows="3"></textarea>
      </div>
      <button className="btn btn-info">Submit</button>
    </div>
  );
}

export default QuotationEditor;
