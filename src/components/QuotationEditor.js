import React from "react";
import "./QuotationEditor.css";

function QuotationEditor() {
  return (
    <div>
      <form>
        <h1 className="editor">Quotation Editor</h1>
        <h2 className="amount">
          Amount:<span className="amountNumber">125 ₹</span>
        </h2>
        <div className="form-content">
          <div className="display">
            <div className="flexName">
              Name:
              <input type="text" />
            </div>
            <div className="flexQ">Quotation Id:6461666</div>
          </div>
          <div className="selectBox">
            <label className="label" for="type">
              Type:
            </label>
            <select name="type" id="type">
              <option value="Bar">Volvo</option>
              <option value="Label">Saab</option>
              <option value="Label2">Mercedes</option>
              <option value="Label3">Audi</option>
            </select>
          </div>
          <div className="selectBox">
            <label className="label" for="Size">
              Size:
            </label>
            <select name="Size" id="Size">
              <option value="Size0">Size1</option>
              <option value="Sizel">Size2</option>
              <option value="Size2">Size3</option>
              <option value="Size3">Size4</option>
            </select>
          </div>
          <div className="selectBox">
            <label className="label" for="paper">
              Paper:
            </label>
            <select name="paper" id="paper">
              <option value="Size0">Normal</option>
              <option value="Sizel">Paper-2</option>
              <option value="Size2">Paper-3</option>
              <option value="Size3">Paper-4</option>
            </select>
          </div>

          <div className="selectBox">
            <label className="label" for="ink">
              Ink:
            </label>
            <select name="ink" id="ink">
              <option value="Size0">Ink1</option>
              <option value="Sizel">Ink2</option>
              <option value="Size2">Ink3</option>
              <option value="Size3">Ink4</option>
            </select>
          </div>

          <div className="selectBox">
            <label className="label" for="Cunstomer">
              Cunstomer Type:
            </label>
            <select name="Cunstomer" id="Cunstomer">
              <option value="Size0">Regular</option>
              <option value="Sizel">One Time</option>
            </select>
          </div>
          <div className="button">
            <a href="/" className="btn">
              Generate Quotation
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QuotationEditor;
