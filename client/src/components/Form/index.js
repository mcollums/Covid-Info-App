import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group" style={{float: props.floatdir, width: "70%", marginRight: "10px" }}>
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: props.floatdir, marginBottom: 10, width: "25%", fontSize: ".8rem" }} className="btn btn-dark">
      {props.children}
    </button>
  );
}
