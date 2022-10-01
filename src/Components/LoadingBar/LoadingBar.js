import React, { useState, useEffect } from "react";
import "./LoadingBar.css";

const LodingBar = () => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (filled < 100 && isRunning)
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
  }, [filled, isRunning]);

  return (
    <>
      <div>
        <h5>
          Food is any substance consumed to provide nutritional support for an
          organism.
        </h5>
      </div>
      <div className="card">
        <div className="App">
          <div className="bar">
            <div
              style={{
                height: "100%",
                width: `${filled}%`,
                transition: "width o.5s",
                backgroundColor: "#a66cff",
              }}
            ></div>
            <span className="barPercent">{filled} %</span>
          </div>
          <button className="btn" onClick={() => setIsRunning(true)}>
            Run
          </button>
        </div>
      </div>
    </>
  );
};
export default LodingBar