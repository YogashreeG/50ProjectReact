import React from "react";
import "./Counters.css";

export function Counters() {
  const Counters = document.querySelectorAll(".counter");
  Counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 200;
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
      }
    };
    updateCounter();
  });
    
  return (
    <>
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
      </header>
      <div className="counter-container">
        <i class="fa-brands fa-square-twitter"></i>
        <div className="counter" data-target="12000"></div>
        <span>Twitter followere</span>
      </div>

      <div className="counter-container">
        <i class="fa-brands fa-youtube"></i>
        <div className="counter" data-target="5000"></div>
        <span>You Tube Subscribers</span>
      </div>

      <div className="counter-container">
        <i class="fa-brands fa-facebook"></i>
        <div className="counter" data-target="12000"></div>
        <span>FaceBook</span>
      </div>
    </>
  );
}
