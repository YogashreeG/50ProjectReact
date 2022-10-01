import React from "react";
import "./StylingForm.css";

export function StylingForm() {
  const labels = document.querySelectorAll(".form-control label");
  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
      )
      .join("");
  });
    
    
  return (
    <>
      <div className="container">
        <h1>Please Login</h1>
        <div className="form-control">
          <input type="text" required></input>
          <label>Email</label>
        </div>
        <div className="form-control">
          <input type="pwd" required></input>
          <label>Password</label>
        </div>
        <button className="btn">Login</button>
        <p className="text">Dont have an account?</p>
      </div>
    </>
  );
}
