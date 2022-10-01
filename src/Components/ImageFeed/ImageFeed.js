import React, { useState } from "react";
import "./ImageFoeed.css";

import Img1 from "./img/Img1.png";
import Img2 from "./img/img2.png";
import Img3 from "./img/Img3.png";
import Img4 from "./img/Img4.jpg";
import Img5 from "./img/Img5.png";
import Img6 from "./img/Img6.png";

const ImageFeed = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
    console.log("Selected");
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img alt="" src={tempimgSrc} />
      </div>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "red",
            backgroundColor: "yellowgreen",
          }}
        >
          Gallery
        </h1>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img alt="" src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageFeed;
