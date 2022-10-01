import React from "react";
import "./DropsBoxes.css";

const DropsBoxes = () => {
  const fill = document.querySelector(".fill");
  const emptyi = document.querySelector(".empty");

  function dragStart(e) {
    console.log("e");
    e.classList.add("hold");
  }

  function dragEnd(e) {
    console.log("e");
    e.classList.add("fill");
  }

  // function dragOver(e) {
  //   console.log("e");
  //   e.over.add('over');
  // }

  function dragEnter(e) {
    console.log("e");
    e.preventDefault();
  }

  function dragLeave(e) {
    console.log("e");
    e.target.className = "empty";
  }

  function dragDrop(e) {
    console.log(e);
    console.log("dropped");
    emptyi[1].append(fill);
  }

  return (
    <>
      <div
        className="empty"
        onDragEnter={(e) => e.preventDefault}
        onDragOver={(e) => dragEnter(e)}
        onDragLeave={(e) => dragLeave}
        onDrop={(e) => dragDrop(e)}
      >
        <div className="fill" draggable="true"></div>
      </div>
      <div className="empty"></div>
      <div className="empty"></div>
      <div className="empty"></div>
      <div className="empty"></div>
    </>
  );
};

export default DropsBoxes;
