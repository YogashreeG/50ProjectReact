import { useState } from "react";
import "./ButtonStyle.css";

export const ButtonStyle = () => {
  const [clickedName, setClickedName] = useState("ClickMe");
  const clickHandler = () => {
    console.log("clicked");
    setClickedName("Thank you");
  };
  return (
    <>
      <div></div>
      <button onClick={clickHandler}>{clickedName}</button>
    </>
  );
};
