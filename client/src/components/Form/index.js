import React from "react";

// This file exports the Input, TextArea, and FormBtn components

/*
export function Input(props) {
  return (
    <div className="form-group">
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
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
*/


//====FORM======

//Header for Form
export function Form ({ children }) {
  return <div className="my-5">
    <h1>Book Search:</h1>
    <div className="input-group">
      {children}
    </div>
  </div>
}

//Input field
export function Input(props) {
  return (
    <div className="input-group input-group-lg" placeholder="Lord of the Flies">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

//Search Button
export function SearchBtn({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}