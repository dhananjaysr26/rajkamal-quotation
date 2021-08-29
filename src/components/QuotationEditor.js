import React, { useState } from "react";
import "./QuotationEditor.css";

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
    <div>
      <form>
        <h1 className="editor">Quotation Editor</h1>
        <h2 className="amount">
          Amount:<span className="amountNumber">{Amt} ₹</span>
        </h2>
        <div className="form-content">
          <div className="display">
            <div className="flexName">
              Name:
              <input type="text" />
            </div>
            <div className="flexQ">Quotation Id:{Qid}</div>
          </div>
          <div className="selectBox">
            <label className="label" for="type">
              Type:
            </label>
            <select name="type" id="select-type" onChange={typeChange}>
              <option value="0">-Select-</option>
              <option value="Bar">Bar</option>
              <option value="Label1">Label1</option>
              <option value="Label2">Label2</option>
              <option value="Label3">Label3</option>
            </select>
          </div>
          <div className="selectBox">
            <label className="label" for="Size">
              Size:
            </label>
            <select name="Size" id="select-size" onChange={sizeChange}>
              <option value="0">-Select-</option>
              <option value="Size1">Size1</option>
              <option value="Size2">Size2</option>
              <option value="Size3">Size3</option>
              <option value="Size4">Size4</option>
            </select>
          </div>
          <div className="selectBox">
            <label className="label" for="paper">
              Paper:
            </label>
            <select name="paper" id="select-paper" onChange={paperChange}>
              <option value="0">-Select-</option>
              <option value="Normal">Normal</option>
              <option value="Paper-1">Paper-1</option>
              <option value="Paper-2">Paper-2</option>
              <option value="Paper-3">Paper-3</option>
            </select>
          </div>

          <div className="selectBox">
            <label className="label" for="ink">
              Ink:
            </label>
            <select name="ink" id="select-ink" onChange={inkChange}>
              <option value="0">-Select-</option>
              <option value="Ink-1">Ink1</option>
              <option value="Ink-2">Ink2</option>
            </select>
          </div>

          <div className="selectBox">
            <label className="label" for="Cunstomer">
              Cunstomer Type:
            </label>
            <input type="radio" name="cust-type" value="Regular" onChange={custChange} />Regular
            <input type="radio" name="cust-type" value="OneTime" onChange={custChange} />One Time
          </div>
          <div className="button">
            <a href="#" className="btn" onClick={() => { alert("Quotation Pdf will Download!") }} disabled>
              Generate Quotation
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QuotationEditor;
