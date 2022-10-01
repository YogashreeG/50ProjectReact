import { useState } from "react";
import "./Github.css";
import axios from "axios";

const Github = () => {
  const [details, setDetails] = useState([]);

  const [userName, setUserName] = useState("");

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleClick() {
    const apiurl = `https://api.github.com/users/${userName}`;
    axios
      .get(apiurl)
      .then((res) => setDetails(res.data))
      .catch((err) => setDetails(""));
  }

  return (
    <>
      <div className="container">
        <div className="search">
          <input placeholder="User Name" onChange={(e) => handleChange(e)} />
          <button onClick={() => handleClick()}>Search</button>
        </div>
        <>
          <div className="userdetails" key={details.id}>
            <div className="userprofile">
              <img alt="" src={details.avatar_url} />
              <h3>{details.login}</h3>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Github;
