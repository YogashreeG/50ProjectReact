import React, { useState } from "react";
import "./WebsiteStyle.css";

function WebsiteStyle() {
  const nav = useState(".nav");
  window.addEventListener("scroll", fixNav);

  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
    console.log(window.scrollY, nav.offsetHeight);
  }
  return (
    <>
      <div>
        <nav className="nav">
          <div className="container">
            <h1 className="logo">
              <a href="#">My Website</a>
            </h1>
            <ul>
              <li>
                <a href="#" className="current">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="active">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="active">
                  Services
                </a>
                {/* <li>
                  <a href="#">Contact</a>
                </li> */}
              </li>
            </ul>
          </div>
        </nav>

        <div
          className="hero"
          //   style={{
          //     backgroudImage:
          //       "url(https://th.bing.com/th/id/R.d58339de61b5d07fd4db988f8e8a7cdd?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0)",
          //   }}
        >
          <div className="container">
            <h1>Welcome TO My website </h1>
            <p>
              Indian classical dancing started around 200 BCE in India Diwali.
            </p>
          </div>
        </div>
        <section className="content">
          <h2>Content One</h2>
          <p>
            Indian classical dancing is a very joyful and celebratory thing for
            people to do in the Indian culture. The style of Indian classical
            dancing is very vibrant and motivational.
          </p>
          <h3>Content Two</h3>
          <p>
            The costume consists of a long colourful material with a beautiful
            pattern on it, wrapped around her body, she usually wears a lot of
            jewellery like necklaces, hand bracelet and leg bracelets the female
            also wears a head ornamental piece, she usually has a lot of makeup
            applied to her to make her seem vibrant and attract attention from
            the crowd, and her outfit is usually custom made by hand
          </p>
        </section>
      </div>
    </>
  );
}

export default WebsiteStyle;
