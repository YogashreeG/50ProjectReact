import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-header animated-bg" id="header">
        <img
          src="https://cdn.britannica.com/56/200356-050-45F713D8/Drinking-water-glass.jpg"
          alt=""
        ></img>
      </div>
      <div className="card-content">
        <h3 className="card-title animated-bg animated-bg-text" id="title">
          Water is good for health.
        </h3>
        <p className="card-excerpt" id="excerpt">
          Water (chemical formula H2O) is an inorganic, transparent, tasteless,
          odorless, and nearly.
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
        </p>
        <div className="author">
          <div className="profile-img animated-bg" id="profile-img">
            <img
              src="https://th.bing.com/th/id/OIP.8SlvugFP2WkB44EEKln40gHaFN?pid=ImgDet&rs=1"
              alt=""
              width={"40px"}
              height={"40px"}
            ></img>
          </div>
          <div className="author-info">
            <strong className="animated-bg animated-bg-text" id="name">
              Sundar
            </strong>
            <small className="animated-bg animated-bg-text" id="date">
              Aug 25, 2020
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card