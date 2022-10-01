import React from "react";
import "./Expending.css";

export function Expending() {
  const panels = document.querySelectorAll(`.panel`);

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
    }
    
  return (
    <div className="container">
      <div
        className="panel active"
        style={{
          backgroundImage:
            "url(https://i1.wp.com/hd-background.com/wp-content/uploads/2020/08/wild-forest-scenery-autumn-wallpaper.jpg?fit=1920%2C1200&ssl=1)",
        }}
      >
        <h3>Explore the world</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://i1.wp.com/hd-background.com/wp-content/uploads/2020/08/wild-forest-scenery-autumn-wallpaper.jpg?fit=1920%2C1200&ssl=1)",
        }}
      >
        <h3>Wild Forest</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.fineartamerica.com/images-medium-large-5/sunny-beach-tropical-ocean-konradlew.jpg)",
        }}
      >
        <h3>Sunny Beach</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://i1.wp.com/hd-background.com/wp-content/uploads/2020/08/wild-forest-scenery-autumn-wallpaper.jpg?fit=1920%2C1200&ssl=1)",
        }}
      >
        <h3>City Winter</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.fineartamerica.com/images-medium-large-5/mountain-rain-sean-ramsey.jpg)",
        }}
      >
        <h3>Mountain Rain</h3>
      </div>
    </div>
  );
}
